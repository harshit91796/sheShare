import React, { useEffect, useRef, useState } from "react";
import "./home.css"; // Import the CSS file
import { buyers4, homePic, seller1 } from "../../assets/images.js";
import Navbar from "../../component/navBar/Navbar.jsx";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Footer from "../../component/footer/Footer.jsx";

function Home() {
  const welcomeRef = useRef(null); // Ref for the welcome text container
  const [isVisible, setIsVisible] = useState(false); // State for animation trigger
  const [isInitiallyVisible, setIsInitiallyVisible] = useState(false);

  const { ref, inView } = useInView({ threshold: 0.5 }); // Configure observer

  const images = ['https://picsum.photos/210','https://picsum.photos/260','https://picsum.photos/300','https://picsum.photos/350','https://picsum.photos/210','https://picsum.photos/260','https://picsum.photos/300','https://picsum.photos/350']

  useEffect(() => {
    if (!isInitiallyVisible && inView) {
      setIsVisible(true); // Set visible on initial entry
      setIsInitiallyVisible(true); // Mark initial visibility check done
    } else if (isVisible && !inView) {
      // Optional handling for hiding on full scroll out (comment out if not needed)
      // setIsVisible(false);
    }
  }, [inView, isInitiallyVisible]);
  return (
    <div className="container">
      {" "}
      {/* Set height to full viewport */}
      <Navbar />
      <div className="imgDiv bg-blue-200">
        <img className="img" src={homePic} alt="" />
      </div>

      <div className="linkDiv">
         <div className="linkButton">
         <h1 className="linkTop text-8xl">she Share.</h1>
           <div className="linkBottom">
           <Link className="button1 ">
                 <h1 className="linkText top-79 text-3xl">i have a place</h1>
                 <img src={seller1} alt="" />
           </Link>
           <Link className="button2">
               <h1 className="linkText top-10 text-3xl">we need a place</h1>
               <img src={buyers4} alt="" />
           </Link>
           </div>
         </div>
         </div>
     
      <div className="midDiv mt-40 w-full">
          <div className="midDivTop flex w-fit">
              {images.map((image, index) => (
                <img className="w-60 h-25 mx-7" key={index} src={image} alt="" />
              ))}
          </div>
          <br/>
          <div className="midDivBottom flex w-full">
          {images.map((image, index) => (
            <img className="w-60 h-25 mx-7" key={index} src={image} alt="" />
          ))}
      </div>
      </div>   
      <Footer/>
    </div>
  );
}

export default Home;
