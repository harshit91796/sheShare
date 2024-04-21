import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file

function Navbar() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const navbarHeight = 20; // Adjust according to the actual height of your navbar



    // Adjust the initial scale

    const initialTranslateY = 279; // Adjust the initial vertical translation
    const initialScale = 5.5;     // Adjust the initial scale
  
    const maxTranslateY = 0;      // Maximum vertical translation (stops at 0px)
    const minScale = 1;           // Minimum scale (stops at 1)
  
    // Calculate a smooth transition based on scroll position
    const translationFactor = Math.max(
      0, // Ensure a minimum value of 0 to prevent negative translations
      1 - scrollOffset / window.innerHeight // Normalize scroll position to 0-1 range
    );
  
    const translateY = initialTranslateY * translationFactor;
    const scale = initialScale* translationFactor;

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY < 400 && isOpen === true ){
          
        setScrollOffset(window.scrollY);
        console.log(window.scrollY)
        }else{
         setIsOpen(false);
          console.log('run')
        }
        
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const linkStyle = {
      transform: `translateY(${translateY}px) scale(${scale})`,
    };

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

      <Link to="/" className="boxOne" style={{transform : `${scrollOffset > 400 ? 'translateY(0px) scale(1)' : `translateY(${translateY}px) scale(${scale})`}`}}>
        She Share
      </Link>

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
