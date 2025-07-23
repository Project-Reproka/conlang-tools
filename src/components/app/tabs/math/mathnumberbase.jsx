import MathBaseBtn from '@/components/app/tabs/math/mathbasebtn'

export default function MathNumberBase({ setBase, basearr, setBasenumbers, basenumbers }) {
  function handleBaseChange(e) {
    if (e.target.value == '') return

    let nb = parseInt(e.target.value)

    if (nb > 100) {
      e.target.value = 100
      setBase(100)
      return
    }

    if (nb < 4) {
      setBase(4)
      return
    }

    setBase(nb)
  }

  function handleNumberChange(number, character) {
    var temp = [...basenumbers]
    temp[number] = character

    setBasenumbers(temp)
  }

  return (
    <div className="w-full h-1/2 flex flex-col border border-gray-700">
      <div className="w-full h-1/6 bg-gray-950 flex items-center px-4 border-b border-gray-700">
        <span>Number Base</span>
      </div>

      <div className="w-full h-5/6 flex flex-row bg-gray-900">
        <div className="w-1/6 h-full bg-gray-950 border-r border-gray-700 p-4 flex flex-col gap-2">
          <div className="w-full h-1/2 bg-gray-900 rounded-lg flex flex-col p-3 justify-between items-center">
            <span className="text-xl">Base</span>
            <input type="number" defaultValue={10} min={4} max={100} step={1} onChange={handleBaseChange} className="w-full bg-gray-900 border border-gray-700 [-moz-appearance:textfield] text-center" />
          </div>

          <div className="w-full h-1/2 bg-gray-900 rounded-lg flex flex-col p-3 justify-between items-center">
            <span className="text-xl">Presets</span>
            <button className="w-full bg-cyan-600 rounded-lg py-0.5">Open</button>
          </div>
        </div>

        <div className="w-5/6 h-full p-4 flex flex-wrap flex-col gap-2 overflow-x-scroll">
          {basearr.map(number => <MathBaseBtn key={number} number={number} handlechange={handleNumberChange} />)}
        </div>
      </div>
    </div>
  )
}
