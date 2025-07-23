import MathOrderBtn from '@/components/app/tabs/math/mathorderbtn'

export default function MathOrderofOperations({ orders, smallorder, setOrders, setSmallorder }) {
  function handleOrderMvL(lettercombo, labelsm) {
    var temp = [...orders]
    var temp2 = [...smallorder]
    var spot = temp.indexOf(lettercombo)
    var spot2 = temp2.indexOf(labelsm)
    var old = temp[spot-1]
    var old2 = temp2[spot-1]

    temp[spot-1] = lettercombo
    temp[spot] = old

    temp2[spot2-1] = labelsm
    temp2[spot2] = old2

    setOrders(temp)
    setSmallorder(temp2)
  }

  function handleOrderMvR(lettercombo, labelsm) {
    var temp = [...orders]
    var temp2 = [...smallorder]
    var spot = temp.indexOf(lettercombo)
    var spot2 = temp2.indexOf(labelsm)
    var old = temp[spot+1]
    var old2 = temp2[spot+1]

    temp[spot+1] = lettercombo
    temp[spot] = old

    temp2[spot2+1] = labelsm
    temp2[spot2] = old2

    setOrders(temp)
    setSmallorder(temp2)
  }

  return (
    <div className="w-2/3 h-full flex flex-col border border-gray-700">
      <div className="w-full h-1/6 bg-gray-950 flex items-center px-4 border-b border-gray-700">
        <span>Order of Operations</span>
      </div>

      <div className="w-full h-5/6 bg-gray-900 px-4 py-8 flex flex-row gap-2 overflow-x-scroll">
        {orders.map(order => <MathOrderBtn key={order} label={order} labelsmall={smallorder[orders.indexOf(order)]} leftbtnclick={handleOrderMvL} rightbtnclick={handleOrderMvR} isfirst={order == orders[0]} islast={order == orders[orders.length-1]} />)}
      </div>
    </div>
  )
}
