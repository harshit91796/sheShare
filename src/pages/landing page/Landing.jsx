import React from 'react'
import { house } from '../../assets/images'
import Navbar from '../../component/navBar/Navbar'
import './landing.css'

function Landing() {
  return (
    <div className="landingContainer">
      <Navbar />
      <div className="landingImg ">
        <img className="imgTop w-full h-[35rem]" src={house} alt="landing" />
        <div className="landingSearchContainer">
          <div className="landingSearch">
            <div className="landingSearchInpoot">
              <h1 
              className='kk' //h-5 text-red-500 text-[20px]'
              >Location</h1>
              <input
                className="text-white"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="landingCalender">
              <h1 className='landingH1'>calender</h1>
              
            </div>
            <div className="landingCheckDates">
              <h1 className='landingH1'>Check Dates</h1>
            </div>
            <div className="landingSearchButton">
              <button >submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing
