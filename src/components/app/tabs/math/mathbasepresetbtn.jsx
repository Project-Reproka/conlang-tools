export default function MathPresetBtn({ preset, setBase, setBasenumbers, setPresetsopen }) {
  function selectpreset() {
    setBase(preset.base)
    setBasenumbers(preset.basenumbers)
    setPresetsopen(false)
  }

  return (
    <div className="h-full bg-gray-700 w-52 rounded-lg p-3 flex flex-col justify-between items-center">
      <div className="w-full h-1/2 flex flex-col gap-2 items-center">
        <span className="text-xl text-center">{preset.name}</span>
        <span>Base: {preset.base}</span>
      </div>

      <button className="w-full h-1/3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-colors" onClick={selectpreset}>Select</button>
    </div>
  )
}