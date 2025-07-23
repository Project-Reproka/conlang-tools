import NavbarItem from '@/components/app/navbaritem'

export default function Navbar({ select, selected, titles }) {
  function handleSelect(thing) {
    select(thing)
  }

  function getColorAtPercent(percent) {
    const colorStops = [
      { percent: 0, color: [255, 0, 255, 1] },
      { percent: 50, color: [0, 170, 255, 1] },
      { percent: 100, color: [0, 255, 34, 1] }
    ]

    percent = Math.max(0, Math.min(100, percent))

    let start, end
    for (let i = 0; i < colorStops.length - 1; i++) {
      if (percent >= colorStops[i].percent && percent <= colorStops[i + 1].percent) {
        start = colorStops[i]
        end = colorStops[i + 1]

        break
      }
    }

    const range = end.percent - start.percent
    const t = (percent - start.percent) / range

    const rgba = start.color.map((startVal, i) => {
      const endVal = end.color[i]
      return startVal + (endVal - startVal) * t
    })

    const [r, g, b, a] = rgba.map((v, i) => i < 3 ? Math.round(v) : +v.toFixed(3))
    return [
      `#${Math.floor(r * 1.0).toString(16).padStart(2, '0')}${Math.floor(g * 1.0).toString(16).padStart(2, '0')}${Math.floor(b * 1.0).toString(16).padStart(2, '0')}`,
      `#${Math.floor(r * 0.8).toString(16).padStart(2, '0')}${Math.floor(g * 0.8).toString(16).padStart(2, '0')}${Math.floor(b * 0.8).toString(16).padStart(2, '0')}`,
      `#${Math.floor(r * 0.6).toString(16).padStart(2, '0')}${Math.floor(g * 0.6).toString(16).padStart(2, '0')}${Math.floor(b * 0.6).toString(16).padStart(2, '0')}`,
    ]
  }

  return (
    <div className="h-[10%] bg-gray-950 flex flex-row">
      {titles.map(item => <NavbarItem key={titles.indexOf(item)} titleid={titles.indexOf(item)} item={item} active={item == titles[selected]} colors={getColorAtPercent((titles.indexOf(item) / titles.length) * 100)} clickevt={handleSelect} />)}
    </div>
  )
}
