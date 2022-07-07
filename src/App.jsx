import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import context from './Context'

import Home from "./Home";
import Navbar from "./Navbar";
import Benefits from "./Benefits";
import Properties from "./Properties";
import CityImg from "./CityImg";
import GainExperience from "./GainExperience";
import ConsltAbout from "./ConsltAbout";
import Footer from "./Footer";


import './App.css';
import './Navbar.css';
import './index.css';
import './Home.css';
import './Benefits.css';
import './Properties.css';
import './CityImg.css';
import './GainExperience.css';
import './ConsltAbout.css';
import './Footer.css';
import './Under_maintain.css';

const App =() => {
    return (

       <>
           <Navbar />
           <Home />
           <Benefits />
           <Properties />
           <CityImg />
           <GainExperience />
           <ConsltAbout />
           <Footer />
        </>
    );
} 

export default App;

// function App(){
//     return(
//         <Home />
    
//     )
// }
// export default App;
