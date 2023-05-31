import React from 'react'
import { useSelector } from 'react-redux'
import VerticalTabs from './VericalTabs'

export default function DataComponent() {
  const mainMenu = useSelector((state) => state.mainMenu)
  let redIndex = useSelector((state) => state.menuIndex);

  console.log(redIndex)
  console.log(mainMenu)
  return (
    <>
      <div className='w-full flex justify-between'>
        {mainMenu && <VerticalTabs menuName={mainMenu} />}
      </div>
    </>
  )
}
