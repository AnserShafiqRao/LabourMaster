import React from 'react'
import './scroller.css'
import WhiteIcon from '../../Images/slider-icon.png'
import BlackIcon from '../../Images/slider-icon-black.png'

const ContentScroller = () => {
  return (
    
    <>
    <div class="marquee1">
    <div class="marquee1__group anime1" >
      <h4 href="/">  
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' class="companyImg" />
      
      
      <h4 href="/">
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' class="companyImg" />
      

      
      <h4 href="/">
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' class="companyImg" />
     
    </div>
  <div class="marquee1__group anime1" aria-hidden="true">
       <h4 href="/">  
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' class="companyImg" />
      
      
      <h4 href="/">
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' class="companyImg" />
      
      
      <h4 href="/">
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={BlackIcon} alt='SLider Icon' class="companyImg" />
      
    </div>
    </div>


    <div class="marquee2">
    <div class="marquee2__group anime2" >
      <h4 href="/">  
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' class="companyImg" />
      
      
      <h4 href="/">
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' class="companyImg" />
      

      
      <h4 href="/">
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' class="companyImg" />
     
    </div>

  <div class="marquee2__group anime2" aria-hidden="true">
       <h4 href="/">  
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' class="companyImg" />
      
      
      <h4 href="/">
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' class="companyImg" />
      
      
      <h4 href="/">
        <span class="afterColon">Scale your marketing agency</span>
      </h4>
      <img src={WhiteIcon} alt='SLider Icon' class="companyImg" />
      
    </div></div>
    </>
  )
}

export default ContentScroller