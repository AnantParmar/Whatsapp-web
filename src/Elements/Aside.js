import React from 'react'
import '../CSS/Aside.css'
import AsideNavBar from './AsideNavBar'
import AsideSearch from './AsideSearch'
const Aside = () => {
  return (
    <div className='asideDiv'>
      <AsideNavBar/>
      <AsideSearch/>
    </div>
  )
}

export default Aside
