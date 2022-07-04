import React, { useState, useEffect } from "react";
import TempIndex from "./TempIndex";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import context from './Context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCaretDown,
  faIndianRupee,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const SecondPgNavFiltr = () => {
  // function sortlist() {
  //     document.getElementById("mySortlist").classList.toggle("show");
  //   }

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  // function resDropFn() {
  //     document.getElementById("resDropdown").classList.toggle("show");
  // }

  // // Close the dropdown if the user clicks outside of it
  // window.onclick = function (e) {
  //     if (!e.target.matches('.resdropbtn')) {
  //         var resDropdown = document.getElementById("resDropdown");
  //         if (resDropdown.classList.contains('show')) {
  //             resDropdown.classList.remove('show');
  //         }
  //     }
  // }

  //const [fullProducts, setFullProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [bhk, setBhk] = useState(0);
  const [propertyType, setPropertyType] = useState("All");
  const [budget,setBudget]=useState(100);
  const [area,setArea]=useState(100)
  const [propertyAge, setPropertyAge] = useState(new Array(4).fill(0));
  const [propertyStatus, setPropertyStatus] = useState("All");
  const [areaType, setAreaType] = useState("All");
  const [furnished, setFurnished] = useState(0);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allProject")
      .then((res) => {
        //console.log((res.data[0]))
        //setFullProducts(res.data[0]);
        setProducts(res.data[0]);
        //console.log(fullProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    // console.log(search)
    // if(search!=="")

    let tempHouses=[...products];
    console.log("pr");
    console.log(products)

  //  setProducts(fullProducts);
    // console.log(products);

      tempHouses.filter((house) => {
        return house.areaType == areaType;
      })

      tempHouses.filter((house) => {
        return house.propertyType == propertyType;
      })

      tempHouses.filter((house) => {
        return house.bedrooms == bhk;
      })

   
    //console.log("pa"+propertyAge)
      tempHouses.filter((house) => {
        let pAge = house.age;
        if (propertyAge[0] == 1 && pAge >= 0 && pAge < 2) {
          return 1;
        }
        if (propertyAge[1] == 1 && pAge >= 2 && pAge < 5) {
          return 1;
        }
        if (propertyAge[2] == 1 && pAge >= 5 && pAge < 10) {
          return 1;
        }
        if (propertyAge[3] == 1 && pAge >= 10) {
          return 1;
        }
        return 0;
      })
    
      tempHouses.filter((house) => {
        return house.status == propertyStatus;
      })

      tempHouses.filter((house) => {
        let flag;
        if (house.furnished == "true") flag = 1;
        else flag = 0;
        return flag == furnished;
      })

      setProducts(tempHouses)
  },[bhk,propertyAge]);

  const handlebhk = (b) => {
    setBhk(b);
    // console.log("gg"+fullProducts)
  };

  const handlePropertyType = (PType) => {
    setPropertyType(PType);
  };

  const handlePropertyAge = (ind) => {
    let temp = [...propertyAge];
    //  console.log(temp+"bb");
    temp[ind] = !temp[ind];
    // console.log(temp+"gg")
    setPropertyAge(temp);
    // console.log(propertyAge+"nn"+ind)
  };

  const handlePropertyStatus = (ptype) => {
    setPropertyType(ptype);
  };

  const handleAreaType = (atype) => {
    setAreaType(atype);
  };

  return (
    <context.Provider value={products}>
    <>
    console.log("Ggedmdfmkdmk");
    console.log(products)
      <div className="Sec-Navbar">
        <div className="sec-nav-wrapper">
          {/* <!-- Navbar Logo --> */}
          <div className="logo" data-aos="fade-down" data-aos-duration="2000">
            <img src="images/light DH logo.png" alt="logo" />
            {/* <a href="" > <img src="./../images/DH logo.png" alt="logo"></a> */}
            {/* <!-- Logo Placeholder for Inlustration --> */}
            <a href="/">
              <b>
                Differ<strong>Home</strong>
              </b>
            </a>
          </div>

          {/* <!-- Navbar Links --> */}

          <div data-aos="fade-down" data-aos-duration="2000">
            <ul id="menu">
              <div class="search-container">
                <form action="/action_page.php">
                  <a href="#home_">
                    <FontAwesomeIcon icon={faSearch} />
                  </a>
                  <input
                    id="search"
                    type="text"
                    placeholder="Enter city, state, locality, pincode"
                    name="search"
                  />
                </form>
              </div>
              <li>
                <a href="#home_">Home</a>
              </li>
              {/* <!----> */}
              <li>
                <a href="#about-section">About</a>
              </li>
              {/* <!----> */}
              <li>
                <a href="under_maintainance">Services</a>
              </li>
              {/* <!----> */}
              <li>
                <a href="#contactus">Contact US</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Menu Icon --> */}
        <div className="menuIcon">
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>
      </div>

      <div className="filter-header">
        <div className="filter_heading">
          <h5>Filters</h5>
        </div>
        <div className="quote">
          <h3>Find Your Dream Home</h3>
          <p>32 Properties Found</p>
        </div>
        <div className="sortby_btn">
          {/* <button onclick={sortlist()} class="sortbtn">Dropdown</button> */}
          {/* <div id="mySortlist" class="dropdown-content"> */}
          {/* <a href="#">Price</a> */}
          {/* </div> */}
        </div>
      </div>

      <div className="filter_temp">
        <div id="left-filter">
          <form>
            <div className="areaType">
              <p className="title">Area Type</p>
              <div className="residental_dropdown">
                <button
                  className="resdropbtn"
                  onclick={() => handleAreaType("res")}
                >
                  Residental
                  <span>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </button>
                {/* <div className="dropdown-content" id="resDropdown">
                                <a href="#">Residental</a>
                                <a href="#">Commertial</a>
                                <a href="#">Resi-Comm</a>
                            </div> */}
              </div>
            </div>
            <div className="propertyType">
              <p className="title">Property Type</p>
              <div className="propIcons">
                <div className="Icon">
                  <button
                    type="button"
                    onClick={() => handlePropertyType("Apartments")}
                  >
                    {" "}
                    <img src="images/apartmentIcon.png" alt=" " />
                    <p className="iconName">Apartmentns</p>{" "}
                  </button>
                </div>
                <div className="Icon">
                  <button
                    type="button"
                    onClick={() => handlePropertyType("Bungalow")}
                  >
                    {" "}
                    <img src="images/bunglowIcon.png" alt=" " />
                    <p className="iconName">Bungalow</p>{" "}
                  </button>
                </div>
                <div className="Icon">
                  <button
                    type="button"
                    onClick={() => handlePropertyType("Plot")}
                  >
                    {" "}
                    <img src="images/plotIcon.png" alt=" " />
                    <p className="iconName">Plot/Villa</p>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="Budget">
              <p className="title">Budget </p>
              <input className="range-set" type="range" name="" id="" onchange={()=>setBudget(this.value)}/>
              <div className="minMax">
                <div className="min">
                  <label className="titleMin">Min</label>
                  <input type="number" name="" id="" value="1" />
                </div>
                <div className="max">
                  <label className="titleMax">Max</label>
                  <input type="number" name="" id="" value="1000000" />
                </div>
              </div>
            </div>
            <hr />
            <div className="Area">
              <p className="title">
                Area<span>sqft.</span>
              </p>
              <input className="range-set" type="range" name="" id="" onchange={()=>setArea(this.value)} />
              <div className="minMax">
                <div className="min">
                  <label className="titleMin">Min</label>
                  <input type="number" name="" id="" value="1" />
                </div>
                <div className="max">
                  <label className="titleMax">Max</label>
                  <input type="number" name="" id="" value="1000000" />
                </div>
              </div>
            </div>

            <hr />
            <div className="bhk">
              <p className="title">BHKs</p>
              <div className="bhkTypes">
                <label className="btype">
                  <button type="button" onClick={() => handlebhk(1)}>
                    1
                  </button>
                </label>
                <label className="btype">
                  <button type="button" onClick={() => handlebhk(2)}>
                    2
                  </button>
                </label>
                <label className="btype">
                  <button type="button" onClick={() => handlebhk(3)}>
                    3
                  </button>
                </label>
                <label className="btype">
                  <button type="button" onClick={() => handlebhk(4)}>
                    4
                  </button>
                </label>
                <label className="btype">
                  <button type="button" onClick={() => handlebhk(5)}>
                    4+
                  </button>
                </label>
              </div>
            </div>

            <hr />
            <div className="propertyAge">
              <p className="title">Property Age</p>
              <div className="ageChecks">
                <div className="check1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={propertyAge[0]}
                    onChange={() => handlePropertyAge(0)}
                  />
                  <label>0-2 Years</label>
                </div>
                <div className="check1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={propertyAge[1]}
                    onChange={() => handlePropertyAge(1)}
                  />
                  <label>2-5 Years</label>
                </div>
                <div className="check1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={propertyAge[2]}
                    onChange={() => handlePropertyAge(2)}
                  />
                  <label>5-10 Years</label>
                </div>
                <div className="check1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={propertyAge[3]}
                    onChange={() => handlePropertyAge(3)}
                  />
                  <label>10+ Years</label>
                </div>
              </div>
            </div>

            <hr />
            <div className="propertyStatus">
              <p className="title">Property Status</p>
              <div className="statusBox">
                <div className="status1">
                  <label className="btype">
                    <button
                      type="button"
                      onClick={() => handlePropertyStatus("ready")}
                    >
                      Ready To Move
                    </button>
                  </label>
                </div>
                <div className="status1">
                  <label className="btype">
                    <button
                      type="button"
                      onClick={() => handlePropertyStatus("under")}
                    >
                      Under Construction
                    </button>
                  </label>
                </div>
              </div>
            </div>

            <hr />

            <div className="furnishedChecks">
              <div className="check1">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={furnished}
                  onChange={() => setFurnished(1 - furnished)}
                />
                <label>Furnished</label>
              </div>
            </div>
          </form>
        </div>

        {/*-----mobile filter header view-----*/}

        <div className="mob-filter-header">
          <div className="filter-btn">
            <a href="">
              <p>Filters</p>
            </a>
          </div>
          <div class="mob-search-container">
            <form action="/action_page.php">
              <a href="#home_">
                <FontAwesomeIcon icon={faSearch} />
              </a>
              <input
                id="search"
                type="text"
                placeholder="Enter city, state, locality, pincode"
                name="search"
              />
            </form>
          </div>
        </div>

        <TempIndex />
      </div>
    </>
    </context.Provider>
  );

};

export default React.memo(SecondPgNavFiltr);


