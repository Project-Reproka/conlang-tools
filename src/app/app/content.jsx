'use client'

import Navbar from '@/components/app/navbar'
import { useState } from 'react'

// import tabs 0-4
import MathTab from '@/components/app/tabs/mathtab'
// import tabs 6 and 7

export default function AppContent() {
  const [ selected, setSelected ] = useState(5)
  const titles = [
    'word generation',
    'phonology',
    'lexicon',
    'dictionary',
    'grammar',
    'mathematics',
    'export',
    'settings'
  ]

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-[90%] bg-[linear-gradient(110deg,_#ff00ff_0%,_#00aaff_55%,_#00ff00_100%)]">
        {selected == 0 ? <span>congratulations, you have reached your destination. {titles[0]} alert. {titles[0]} alert</span> : null}
        {selected == 1 ? <span>congratulations, you have reached your destination. {titles[1]} alert. {titles[1]} alert</span> : null}
        {selected == 2 ? <span>congratulations, you have reached your destination. {titles[2]} alert. {titles[2]} alert</span> : null}
        {selected == 3 ? <span>congratulations, you have reached your destination. {titles[3]} alert. {titles[3]} alert</span> : null}
        {selected == 4 ? <span>congratulations, you have reached your destination. {titles[4]} alert. {titles[4]} alert</span> : null}
        {selected == 5 ? <MathTab /> : null}
        {selected == 6 ? <span>congratulations, you have reached your destination. {titles[6]} alert. {titles[6]} alert</span> : null}
        {selected == 7 ? <span>congratulations, you have reached your destination. {titles[7]} alert. {titles[7]} alert</span> : null}
      </div>

      <Navbar select={setSelected} selected={selected} titles={titles} />
    </div>
  )
}
