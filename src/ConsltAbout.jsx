import React, {useEffect} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const ConsltAbout = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
        <div className="Consult_about">
        <div className="Consult_part">
                  <div className="conslt_textpart">
                   <h1>
                   Get a Free Consultation
                   </h1>
                   <p>
                   With a well-trained and professional team, we ensure the quality
                   of our services. We provide a full analysis on the properties with
                   a futuristic perspective to help you determine the houseue of each one.
                   </p>
                   <a href="#contactus" className="button_1">Reach US</a>
                   </div>
                   <div className="conslt-boy-img">
                    <img src='images/FreeConslt.png' alt="Consult-boy" />
                  </div>
           </div>
           <div id="about-section" className="about_part" data-aos="fade-up" data-aos-duration="2000">
               <h2>About Us</h2>
               <p>We at DifferHome understand the houseue of an individual's perfect home, which he or
               she has been planning for years, and even a single mistake move can cost a lot of its houseue.
               A full-fledged core team of IIT and BITs graduates provides you a one-stop platform for all
               activities, from finding the perfect dream home to creating a new one, we provide all services
                right here, assuring that your every need and want is met to your satisfaction.</p>
           </div>
           <div className="responsive_part">
           <h3>Get a Free Consultation</h3>
           <div className="btn"><a href="#contactus" className="button_rsp">Reach US</a></div>           
           </div>
        </div>
    </>
  )
};

export default ConsltAbout;