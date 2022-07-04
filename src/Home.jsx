//library imports
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faClock, faUserShield } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <div className="bg_container" id="home_">
                <div className="tagline" data-aos="fade-right" data-aos-duration="2000">
                    <p1>Explore Beautiful Houses,</p1><br />
                    <p2>Apartments, Villas & More.</p2><br />
                    <h5>We prefer your home to be </h5>
                    <h2>DIFFER<t2> in</t2></h2>
                    <h1><strong>DIFFERHOME</strong></h1>

                </div>
                <div className="three_lines_icons">
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <p><FontAwesomeIcon icon={faClock} /> Real-Time Inventory</p></div>
                    <div data-aos="fade-left" data-aos-duration="2000">
                        <p><FontAwesomeIcon icon={faBinoculars} /> Comprehensive Overview</p></div>
                    <div data-aos="fade-left" data-aos-duration="3000">
                        <p><FontAwesomeIcon icon={faUserShield} /> Verified RERA Registration</p></div>
                </div>
                <div className="image" />
                {/* <!-- <img src="./images/carousel.jpg" alt=""> --> */}
            </div>

            <div className="searchbox" data-aos="fade-left" data-aos-duration="2000">
                <h4>Looking For :</h4>
                <form action="/filter1" method="get">
                    <input type="radio" id="apartment" name="opt-1" houseue="Apartment" />
                    <label for="Apartment">Apartment</label>
                    <input type="radio" id="villa" name="opt-2" houseue="Villa" />
                    <label for="villa">Bungalow/Villa</label><br />
                    <input type="radio" id="plot" name="opt-3" houseue="Plot" />
                    <label for="plot">Plot/Villa</label><br />

                    <div className="state_name">
                        <label for="State">Select State :</label><br />
                        <input list="states" name="States" placeholder="States" />
                        <datalist id="states" >
                            {/* <option houseue="Andhra Pradesh" />
                     <option houseue="Arunachal Pradesh" />
                     <option houseue="Assam" />
                     <option houseue="Bihar" />
                     <option houseue="Chhattisgarh" />
                     <option houseue="Goa" />
                     <option houseue="Gujarat" />
                     <option houseue="Haryana" />
                     <option houseue="Himachal Pradesh" />
                     <option houseue="Jharkhand" />
                     <option houseue="Karnataka" />
                     <option houseue="Kerala" />
                     <option houseue="Madhya Pradesh" />
                     <option houseue="Maharashtra" />
                     <option houseue="Manipur" />
                     <option houseue="Meghalaya" />
                     <option houseue="Mizoram" />
                     <option houseue="Nagaland" />
                     <option houseue="Odisha" />
                     <option houseue="Punjab" /> */}
                            <option houseue="Rajasthan" />
                            {/* <option houseue="Sikkim" />
                     <option houseue="Tamil Nadu" />
                     <option houseue="Telangana" />
                     <option houseue="Tripura" />
                     <option houseue="Uttar Pradesh" />
                     <option houseue="Uttarakhand" />
                     <option houseue="West Bengal" /> */}

                        </datalist> <br />
                    </div>

                    <div className="city_name">
                        <label for="City">Select City :</label><br />
                        <input list="cities" name="city" placeholder="City" />
                        <datalist id="cities" >
                            {/* <option houseue="Amaravati" />
                     <option houseue="Itanagar" />
                     <option houseue="Dispur" />
                     <option houseue="Patna" />
                     <option houseue="Raipur" />
                     <option houseue="Panaji" />
                     <option houseue="Gandhinagar" />
                     <option houseue="Chandigarh" />
                     <option houseue="Shimla" />
                     <option houseue="Ranchi" />
                     <option houseue="Bengaluru" />
                     <option houseue="Thiruvananthapuram" />
                     <option houseue="Bhopal" />
                     <option houseue="Mumbai" />
                     <option houseue="Imphal" />
                     <option houseue="Shillong" />
                     <option houseue="Aizawl" />
                     <option houseue="Kohima" />
                     <option houseue="Bhubaneswar" />
                     <option houseue="Chandigarh" /> */}
                            <option houseue="Jaipur" />
                            {/* <option houseue="Gangtok" />
                     <option houseue="Chennai" />
                     <option houseue="Hyderabad" />
                     <option houseue="Agartala" />
                     <option houseue="Lucknow" />
                     <option houseue="Dehradun" />
                     <option houseue="Kolkata" /> */}
                            <option houseue="Jodhpur" />
                            <option houseue="Udaipur" />
                            <option houseue="Ajmer" />
                            <option houseue="Kota" />
                            <option houseue="Alwar" />


                        </datalist> <br />
                    </div>
                    <div className="startbtn"><a href="under_maintainance" className="start_btn">Start</a></div>
                </form>
            </div>
            <div className="reponsive_btn">
                <a href="under_maintainance" className="rsp_btn">Get Started</a>
            </div>

            {/* one step solution part with boy sitting on sofa */}

            <div className="one_step_solution">
                <div className="one_step_textpart">
                    <h1>
                        One stop solution to your search for dream home
                    </h1>
                    <p>
                        DifferHome is a one-stop platform for all the activities,
                        either it is locating the perfect dream home to building
                        a new one, we provide all the services just in here.
                    </p>
                    <a href="under_maintainance" class="button_1">Get Started</a>
                    <a href="#contactus" class="button_2">Contact Us</a>
                </div>
                <div className="sofa-boy-img">
                    <img src='images/Sofa-boy.png' alt="Boy on Sofa" />
                </div>
            </div>

        </>
    )
}

export default Home;