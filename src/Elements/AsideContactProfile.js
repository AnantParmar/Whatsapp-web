import React from 'react'
import person from '../whatsapp_icons/apple-icon.png'
import '../CSS/AsideContactProfile.css'
const AsideContactProfile = () => {
  return (
    <div className='asideContactProfileDiv'>
      <div id='profileDiv'>
        <div id='profileImgDiv'>
            <img src={person} alt="" width={'49px'} height={'49px'} />
        </div>
        <div id='profileDetailsDiv'>
            <div id='nameAndDate'>
                <span id="name">CNS Presentation</span>
                <span id="date">16/03/2023</span>
            </div>
            <div id='messageAndIcons'>
                <span id='message'>Hello</span>
                <span id="icons">
                <svg height="15" width="15" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="M12.074 4.21 8.7 8.232l.116 4.233a.4.4 0 0 1-.657.318L.43 6.297a.4.4 0 0 1 .199-.702l4.196-.622L8.196.957a.63.63 0 0 1 .887-.078l2.914 2.445a.63.63 0 0 1 .077.887ZM1.294 14.229a.713.713 0 0 1-1.09-.915l2.674-3.64 1.536 1.288-3.12 3.267Z"></path></svg>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AsideContactProfile
