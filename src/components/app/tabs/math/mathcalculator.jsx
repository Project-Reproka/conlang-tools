export default function MathCalculator({ basenumbers }) {
  return (
    <div className="w-1/3 h-full bg-gray-900 flex flex-col border border-gray-700">
      <div className="w-full h-[8.333333%] bg-gray-950 flex items-center px-4 border-b border-gray-700">
        <span>Calculator</span>
      </div>

      <div className="w-full h-[91.666666%] bg-gray-900 flex flex-col gap-8 p-4">
        <div className="w-full h-1/4 flex flex-col">
          <div className="bg-gray-700 h-full text-6xl rounded-t-xl flex justify-end items-center px-2">
            0
          </div>

          <div className="bg-gray-800 text-lg rounded-b-xl flex justify-end items-center px-2 py-1 overflow-clip whitespace-nowrap">
            equation panel
          </div>
        </div>

        <div className="w-full h-3/4 bg-gray-800 rounded-lg p-2 flex flex-col gap-2 text-xl">
          <div className="relative w-full h-1/5 bg-gray-700 rounded-lg overflow-hidden">
            <div className="absolute inset-0 overflow-x-auto p-2">
              <div className="flex flex-row items-center gap-2 w-max h-full">
                {basenumbers.map((num, i) => <button key={i} className="bg-gray-600 h-full rounded-lg px-4">{num}</button>)}
              </div>
            </div>
          </div>
          
          <div className="w-full h-1/5 flex flex-row gap-2">
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">+</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">7</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">8</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">9</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">{'('}</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">{')'}</button>
          </div>

          <div className="w-full h-1/5 flex flex-row gap-2">
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">-</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">4</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">5</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">6</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">{'['}</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">{']'}</button>
          </div>

          <div className="w-full h-1/5 flex flex-row gap-2">
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">*</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">1</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">2</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">3</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">{'{'}</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">{'}'}</button>
          </div>

          <div className="w-full h-1/5 flex flex-row gap-2">
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">/</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">^</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">0</button>
            <button className="bg-gray-700 w-1/6 h-full rounded-lg">clr</button>
            <button className="bg-gray-700 w-[calc(33.333%+8px)] h-full rounded-lg">ent</button>
          </div>
        </div>
      </div>
    </div>
  )
}
