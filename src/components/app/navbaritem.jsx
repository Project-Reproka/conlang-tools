export default function NavbarItem({ titleid, item, active, colors, clickevt }) {
  function btnclick() {
    clickevt(titleid)
  }

  if (active) {
    return (
      <button className="backdrop-blur-lg pb-1 h-full flex flex-grow justify-center items-center bg-[#ffffff11] hover:bg-[#ffffff22] transition-colors group">
        <span className="group-hover:-translate-y-0.5 transition-transform [text-shadow:0_0_35px_#ffffffff]" style={{color: colors[0]}}>{item.toUpperCase()}</span>
        <div className="w-full h-1 absolute bottom-0 left-0]" style={{background: colors[0], boxShadow: '0 0 25px ' + colors[0] + ', 0 -25px 35px ' + colors[0]}}></div>
      </button>
    )
  } else {
    return (
      <button className="backdrop-blur-lg h-full flex flex-grow justify-center items-center border-b-4 bg-[#ffffff00] hover:bg-[#ffffff11] transition-colors group" style={{borderColor: colors[1]}} onClick={btnclick}>
        <span className="group-hover:-translate-y-0.5 transition-transform" style={{color: colors[0]}}>{item.toUpperCase()}</span>
      </button>
    )
  }
}
