const express = require('express')
const router = express.Router()

const updateDate = (date) => {
  const sec_in_day = 84500;
  const daysPerLunarMonth = 16;
  const seasonalMonthPattern = [42, 43, 42, 42, 43, 42, 42, 42];
  const epochStart = new Date(Date.UTC(1421, 0, 15, 12, 0, 0));
  const now = date != undefined ? new Date(date) : new Date();
  const elapsedSeconds = (now - epochStart) / 1000;
  const elapsedDays = Math.floor(elapsedSeconds / sec_in_day);
  const daysec = elapsedSeconds % sec_in_day;

  // --- Seasonal Calendar Calculation ---
  let seasonalYear = 0, daysCount = 0;
  while (daysCount + seasonalMonthPattern.reduce((a, b) => a + b) + (seasonalYear % 4 === 0 ? 1 : 0) <= elapsedDays) {
    daysCount += seasonalMonthPattern.reduce((a, b) => a + b) + (seasonalYear % 4 === 0 ? 1 : 0);
    seasonalYear++;
  }

  let remainingDays = elapsedDays - daysCount;
  let seasonalMonth = 0;
  for (let i = 0; i < seasonalMonthPattern.length; i++) {
    let monthLength = seasonalMonthPattern[i] + (i === 0 && seasonalYear % 4 === 0 ? 1 : 0);
    if (remainingDays < monthLength) break;
    remainingDays -= monthLength;
    seasonalMonth++;
  }

  // --- Independent Lunar Calendar Calculation ---
  const lunarMonth = Math.floor(elapsedDays / daysPerLunarMonth) % 20; // 20-month repeating cycle
  const dayInLunarMonth = (elapsedDays % daysPerLunarMonth) + 1;

  const seasonNames = [
    "nozoþu", "nozošau", "masojažeþu", "masojažšau",
    "lačejoþu", "lačejošau", "duðyþu", "duðyšau"
  ];

  const lunarNames = [
    "esunþel", "čazkilþel", "sjolþel", "saðkašþel", "saðaþel", "ankesunþel",
    "čuvuþel", "þunþel", "ankaþel", "šoijeiþel", "kjuzaþel", "aþačiþel",
    "kyčefoþel", "zaiþel", "seroþel", "þažaiþel", "oðizþel", "omþel", "zakoloþel", "liðyþel"
  ];

  // --- Time of Day Calculation ---
  const meals_in_day = 15;
  const talks_in_meal = 8;
  const longfalls_in_talk = 20;
  const stonefalls_in_longfall = 50;

  const meal = Math.floor(daysec / (sec_in_day / meals_in_day));
  const mealsec = daysec % (sec_in_day / meals_in_day);
  const talk = Math.floor(mealsec / (sec_in_day / meals_in_day / talks_in_meal));
  const talksec = mealsec % (sec_in_day / meals_in_day / talks_in_meal);
  const longfall = Math.floor(talksec / (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk));
  const longfallsec = talksec % (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk);
  const stonefall = Math.floor(longfallsec / (sec_in_day / meals_in_day / talks_in_meal / longfalls_in_talk / stonefalls_in_longfall));

  return {
    seasonal: {
      days: remainingDays + 1,
      month: [seasonalMonth, seasonNames[seasonalMonth]],
      year: seasonalYear
    },
    lunar: {
      day: dayInLunarMonth,
      month: [lunarMonth, lunarNames[lunarMonth]]
    },
    time: {
      collapsed: `${String(meal).padStart(2, '0')}:${talk}:${String(longfall).padStart(2, '0')}:${(String(Math.floor(stonefall)).padStart(2, '0'))}`,
      raw: [meal, talk, longfall, stonefall]
    }
  };
};

console.log('> Clock has been synchronized')

router.get('/', (req, res) => {
  res.json(updateDate())
})

router.get('/at/:date', (req, res) => {
  var date = decodeURIComponent(req.params.date)

  res.json(updateDate(date))
})

module.exports = router
