import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file

function Navbar() {
  const [scrollOffset, setScrollOffset] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY < 510  ){
          
        setScrollOffset(window.scrollY);
        console.log(window.scrollY)
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // return () => {
      //   window.removeEventListener('scroll', handleScroll);
      // };
    }, []);
  

  return (
    <nav className="navbar h-20 shadow-md py-4 px-4 flex items-center">
      <ul className="boxTwo">
        {/* Adjust spacing if needed */}
        <Link to="/browse" className="w-full hover:text-sky-400 hover:text-lg">
          Browse Rentals
        </Link>

        <Link to="/about" className="w-full hover:text-sky-400 hover:text-lg">
          About Us
        </Link>
      </ul>

     {/* <Link to="/" className="boxOne" style={{transform : scrollOffset < 500? `translateY(${500 * (1 - scrollOffset / 500)}%) scale(${1 + (3 - 1) * (1 - scrollOffset / 500)})` : `translateY(0px) scale(1)`}}>
        She Share
  </Link>*/}

      <ul className="boxThree">
        {/* Adjust spacing if needed */}
        <Link to="/faq" className="w-full hover:text-sky-400 hover:text-lg">
          FAQs
        </Link>

        <Link to="/account" className="w-full hover:text-sky-400 hover:text-lg">
          Account (Optional)
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
