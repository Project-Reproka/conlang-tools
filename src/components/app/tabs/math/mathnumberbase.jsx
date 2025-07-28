'use client'

import MathBaseBtn from '@/components/app/tabs/math/mathbasebtn'
import MathPresetBtn from '@/components/app/tabs/math/mathbasepresetbtn'
import { useState } from 'react'

export default function MathNumberBase({ setBase, basearr, setBasenumbers, basenumbers, base }) {
  const [ presetsopen, setPresetsopen ] = useState(false)
  const presets = [
    { name: 'Binary', base: 2, basenumbers: ['0', '1'] },
    { name: 'Base-4', base: 4, basenumbers: ['0', '1', '2', '3'] },
    { name: 'Octal', base: 8, basenumbers: ['0', '1', '2', '3', '4', '5', '6', '7'] },
    { name: 'Decimal', base: 10, basenumbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { name: 'Hexadecimal', base: 16, basenumbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'] },
    { name: 'Base-20', base: 20, basenumbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] },
    { name: 'Base-32 (RFC 4648)', base: 32, basenumbers: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '2', '3', '4', '5', '6', '7'] },
    { name: 'Base-32 (Ext. Hex)', base: 32, basenumbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v'] },
    { name: 'Base-64', base: 64, basenumbers: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'] }
  ]

  function handleBaseChange(e) {
    if (e.target.value == '') return

    let nb = parseInt(e.target.value)

    if (nb > 100) {
      e.target.value = 100
      setBase(100)
      return
    }

    if (nb < 2) {
      setBase(2)
      return
    }

    setBase(nb)
  }

  function handleNumberChange(number, character) {
    var temp = [...basenumbers]
    temp[number] = character

    setBasenumbers(temp)
  }

  function handlePresets() {
    setPresetsopen(!presetsopen)
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
            <input type="number" defaultValue={base} min={2} max={100} step={1} onChange={handleBaseChange} className="w-full bg-gray-900 border border-gray-700 [-moz-appearance:textfield] text-center" />
          </div>

          <div className="w-full h-1/2 bg-gray-900 rounded-lg flex flex-col p-3 justify-between items-center">
            <span className="text-xl">Presets</span>
            <button className="w-full bg-cyan-600 hover:bg-cyan-500 transition-colors rounded-lg py-0.5" onClick={handlePresets}>{presetsopen ? 'Close' : 'Open'}</button>
          </div>
        </div>

        {presetsopen ? <div className="w-5/6 grid grid-flow-col grid-rows-1 p-4 gap-2 overflow-x-scroll">
          {presets.map((preset, i) => <MathPresetBtn key={i} preset={preset} setBase={setBase} setBasenumbers={setBasenumbers} setPresetsopen={setPresetsopen} />)}
        </div> : <div className="w-5/6 grid grid-rows-2 auto-cols-max grid-flow-col gap-2 p-4 overflow-x-scroll">
          {basearr.map((number, i) => <div key={number} className={i % 2 == 0 ? 'row-span-1 self-stretch' : 'row-start-2'}>
            <MathBaseBtn number={number} defaultval={basenumbers[number]} handlechange={handleNumberChange} />
          </div>)}
        </div>}
      </div>
    </div>
  )
}
