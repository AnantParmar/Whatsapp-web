import React from 'react'
import '../CSS/Aside.css'
import AsideContact from './AsideContact'
import AsideNavBar from './AsideNavBar'
import AsideSearch from './AsideSearch'
const Aside = () => {
  return (
    <div className='asideDiv'>
      <AsideNavBar/>
      <AsideSearch/>
      <AsideContact/>
    </div>
  )
}

export default Aside
