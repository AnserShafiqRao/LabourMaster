import React from 'react'
import './scroller.css'
import WhiteIcon from '../../Images/slider-icon.png'
import BlackIcon from '../../Images/slider-icon-black.png'

const ContentScroller = () => {
  return (
    
    <>
    <div className="marquee1">
    <div className="marquee1__group anime1" >
      <h4 href="/">  
        <span className="afterColon">Unlock Your Business Potential with Expert Recruiting</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' className="companyImg" />
      
      
      <h4 href="/">
        <span className="afterColon">Unlock Your Business Potential with Expert Recruiting</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' className="companyImg" />
      

      
      <h4 href="/">
        <span className="afterColon">Unlock Your Business Potential with Expert Recruiting</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' className="companyImg" />
     
    </div>
  <div className="marquee1__group anime1" aria-hidden="true">
       <h4 href="/">  
        <span className="afterColon">Unlock Your Business Potential with Expert Recruiting</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' className="companyImg" />
      
      
      <h4 href="/">
        <span className="afterColon">Unlock Your Business Potential with Expert Recruiting</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' className="companyImg" />
      
      
      <h4 href="/">
        <span className="afterColon">Unlock Your Business Potential with Expert Recruiting</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' className="companyImg" />
      
    </div>
    </div>


    <div className="marquee2">
    <div className="marquee2__group anime2" >
      <h4 href="/">  
        <span className="afterColon">Your Partner in Building a Stronger Workforce</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' className="companyImg" />
      
      
      <h4 href="/">
        <span className="afterColon">Your Partner in Building a Stronger Workforce</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' className="companyImg" />
      

      
      <h4 href="/">
        <span className="afterColon">Your Partner in Building a Stronger Workforce</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' className="companyImg" />
     
    </div>

  <div className="marquee2__group anime2" aria-hidden="true">
       <h4 href="/">  
        <span className="afterColon">Your Partner in Building a Stronger Workforce</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' className="companyImg" />
      
      
      <h4 href="/">
        <span className="afterColon">Your Partner in Building a Stronger Workforce</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' className="companyImg" />
      
      
      <h4 href="/">
        <span className="afterColon">Your Partner in Building a Stronger Workforce</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' className="companyImg" />
      
    </div></div>
    </>
  )
}

export default ContentScroller