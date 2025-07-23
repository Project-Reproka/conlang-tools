export default function MathBaseBtn({ number, handlechange }) {
  function handleValueChange(e) {
    handlechange(number, e.target.value)
  }

  return (
    <div className="bg-gray-700 rounded-lg flex flex-col flex-grow p-3 basis-1/3 justify-between items-center">
      <span className="text-xl">{number}</span>
      <input type="text" onChange={handleValueChange} defaultValue={number} className="w-20 bg-gray-700 border border-gray-500 text-center" />
    </div>
  )
}
