import { useState } from 'react'
import MathNumberBase from '@/components/app/tabs/math/mathnumberbase'
import MathOrderofOperations from '@/components/app/tabs/math/mathorderofoperations'
import MathBaseConverter from '@/components/app/tabs/math/mathbaseconverter'
import MathCalculator from '@/components/app/tabs/math/mathcalculator'

export default function MathTab() {
  const [ orders, setOrders ] = useState(['p', 'sb', 'cb', 'e', 'm', 'd', 'a', 's'])
  const [ smallorder, setSmallorder] = useState(['()', '[]', '{}', 'xʸ', '*', '÷', '+', '-'])
  const [ base, setBase ] = useState(10)
  const [ basenumbers, setBasenumbers ] = useState(Array(base))
  var basearr = []

  for (var i = 0; i < base; i++) {
    basearr.push(i)
  }

  if (basenumbers.length != base) setBasenumbers(Array(base))

  if (basenumbers.includes()) {
    setBasenumbers(basearr)
  }

  return (
    <div className="w-full h-full bg-[#000000dd] flex flex-row gap-6 p-4">
      <div className="w-2/3 h-full flex flex-col gap-6">
        <MathNumberBase setBase={setBase} basearr={basearr} setBasenumbers={setBasenumbers} basenumbers={basenumbers} base={base} />

        <div className="w-full h-1/2 flex flex-row gap-6">
          <MathOrderofOperations orders={orders} smallorder={smallorder} setSmallorder={setSmallorder} setOrders={setOrders} />

          <MathBaseConverter base={base} />
        </div>
      </div>

      <MathCalculator basenumbers={basenumbers} />
    </div>
  )
}
