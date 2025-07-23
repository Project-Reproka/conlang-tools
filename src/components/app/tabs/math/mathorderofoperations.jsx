import MathOrderBtn from '@/components/app/tabs/math/mathorderbtn'

export default function MathOrderofOperations({ orders, smallorder, setOrders }) {
  function handleOrderMvL(lettercombo) {
    var temp = [...orders]
    var spot = temp.indexOf(lettercombo)
    var old = temp[spot-1]

    temp[spot-1] = lettercombo
    temp[spot] = old

    setOrders(temp)
  }

  function handleOrderMvR(lettercombo) {
    var temp = [...orders]
    var spot = temp.indexOf(lettercombo)
    var old = temp[spot+1]

    temp[spot+1] = lettercombo
    temp[spot] = old

    setOrders(temp)
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
