import React from 'react'
import '../CSS/AsideNavBar.css'
import person from '../person.svg'
import group from '../group.svg'
import status from '../status.svg'
import chat from '../chat.svg'
import menu from '../menu.svg'
const AsideNavBar = () => {
  return (
    <div className='asideNavBarDiv'>
        <div className="personSvg svgDiv">
            <span className='personSvg'>
                <img src={person} alt="SVG as an image"/>
            </span>
        </div>
        <div className="otherSvg svgDiv">
            <span className='grpSvg'>
                <img src={group} alt="SVG as an image"/>
            </span>
            <span className='statusSvg'>
                <img src={status} alt="SVG as an image"/>
            </span>
            <span className='chatSvg'>
                <img src={chat} alt="SVG as an image"/>
            </span>
            <span className='menuSvg'>
                <img src={menu} alt="SVG as an image"/>
            </span>
        </div>
    </div>
  )
}

export default AsideNavBar
