export default function MathBaseBtn({ number, defaultval, handlechange }) {
  function handleValueChange(e) {
    handlechange(number, e.target.value)
  }

  return (
    <div className="h-full bg-gray-700 rounded-lg flex flex-col p-3 w-32 justify-between items-center">
      <span className="text-xl">{number}</span>
      <input type="text" onChange={handleValueChange} defaultValue={defaultval} className="w-20 bg-gray-700 border border-gray-500 text-center" />
    </div>
  )
}
