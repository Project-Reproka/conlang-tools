'use client'

import { useState } from 'react'

export default function MathBaseConverter({ base, basenumbers }) {
  const [ result, setResult ] = useState('')
  const [ input, setInput ] = useState('')
  const [ invalid, setInvalid ] = useState(false)

  function handleInputChange(e) {
    setInput(e.target.value)
  }

  function handleConverttoLang() {
    setInvalid(false)
    var tempresult = []
  }

  function handleConverttoDeci() {
    setInvalid(false)
    var tempresult = 0

    input.split('').reverse().forEach((item, i) => {
      tempresult += (basenumbers.indexOf(item) * (base ** i))

      if (basenumbers.indexOf(item) == -1) {
        setInvalid(true)
      }
    })

    setResult(tempresult || '0')
  }

  return (
    <div className="w-1/3 h-full flex flex-col border border-gray-700">
      <div className="w-full h-1/6 bg-gray-950 flex items-center px-4 border-b border-gray-700">
        <span>Base Converter</span>
      </div>

      <div className="w-full h-5/6 bg-gray-900 p-4 flex flex-col gap-4 overflow-x-scroll items-center">
        <input type="text" placeholder="Source number..." step={1} className="w-full bg-gray-900 border border-gray-700 [-moz-appearance:textfield] rounded-lg px-2 py-1" onChange={handleInputChange} />
        
        <div className="w-full flex flex-col gap-1">
          <button className="w-full bg-cyan-600 rounded-lg p-2" onClick={handleConverttoLang}>Convert to base-{base}</button>
          <button className="w-full bg-cyan-600 rounded-lg p-2" onClick={handleConverttoDeci}>Convert to decimal</button>
        </div>

        {invalid == false ? <span>Result: {result ? result : '-'}</span> : null}
        {invalid == true ? <span>Invalid number.</span> : null}
      </div>
    </div>
  )
}
