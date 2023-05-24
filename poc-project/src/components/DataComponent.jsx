import React from 'react'
import { useSelector } from 'react-redux'
import VerticalTabs from './VericalTabs'

export default function DataComponent() {
  const mainMenu = useSelector((state) => state.mainMenu)

  return (
    <>
      <div>
        {mainMenu && <VerticalTabs menuName={mainMenu} />}
      </div>
    </>
  )
}
