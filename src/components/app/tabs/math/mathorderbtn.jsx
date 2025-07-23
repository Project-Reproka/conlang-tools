export default function MathOrderBtn({ label, labelsmall, leftbtnclick, rightbtnclick, islast, isfirst }) {
  function leftclick() {
    if (isfirst) return

    leftbtnclick(label)
  }

  function rightclick() {
    if (islast) return
    
    rightbtnclick(label)
  }

  return (
    <div className="h-full bg-gray-700 rounded-lg p-4 flex flex-col justify-between gap-4">
      <div className="w-full h-2/3 text-3xl flex flex-col items-center justify-center">
        <span>{label.toUpperCase()}</span>
        <span className="text-xl">{labelsmall}</span>
      </div>

      <div className="flex flex-row gap-1">
        <button className={(isfirst ? 'bg-gray-500 cursor-default' : 'bg-cyan-600 hover:bg-cyan-500') + ' transition-colors w-10 h-10 text-2xl rounded-l-md'} onClick={leftclick}>
          {'<'}
        </button>
        <button className={(islast ? 'bg-gray-500 cursor-default' : 'bg-cyan-600 hover:bg-cyan-500') + ' transition-colors w-10 h-10 text-2xl rounded-r-md'} onClick={rightclick}>
          {'>'}
        </button>
      </div>
    </div>
  )
}
