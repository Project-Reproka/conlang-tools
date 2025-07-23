export default function MathBaseConverter({ base }) {
  return (
    <div className="w-1/3 h-full flex flex-col border border-gray-700">
      <div className="w-full h-1/6 bg-gray-950 flex items-center px-4 border-b border-gray-700">
        <span>Base Converter</span>
      </div>

      <div className="w-full h-5/6 bg-gray-900 p-4 flex flex-col gap-4 overflow-x-scroll items-center">
        <input type="number" placeholder="Source number..." step={1} className="w-full bg-gray-900 border border-gray-700 [-moz-appearance:textfield] rounded-lg px-2 py-1" />
        
        <div className="w-full flex flex-col gap-1">
          <button className="w-full bg-cyan-600 rounded-lg p-2">Convert to base-{base}</button>
          <button className="w-full bg-cyan-600 rounded-lg p-2">Convert to base-10</button>
        </div>

        <span>result !!!!</span>
      </div>
    </div>
  )
}
