import React from 'react'
import { useSelector } from 'react-redux'
import VerticalTabs from './VericalTabs'

export default function DataComponent() {
  const mainMenu = useSelector((state) =>state.mainMenu)
  const indexMenu = useSelector((state) =>state.menuIndex)
  // console.log(mainMenu)
  // console.log(indexMenu)

  return (
    <>
      <div className='w-full flex justify-between'>
        {mainMenu && <VerticalTabs menuName={mainMenu} currentIndex={indexMenu}/>}
      </div>
    </>
  )
}
