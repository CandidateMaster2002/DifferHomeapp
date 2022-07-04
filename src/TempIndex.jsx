import React from "react";
import Template from './Templates';
import './Templates.css';
import Tempdata from './Tempdata.jsx';
import context  from './Context'
import { useContext } from "react";
import { useEffect } from "react";


const TempIndex = () => {

    const houses=useContext(context);
    console.log("dd");
    console.log(houses);
    return(
        <>
        
            {houses.map((house) => {
                return (
                    <Template
                        key={house._id}
                        imgsrc={house.photos}
                        title={house.propertyName}
                        address={house.city}
                        bhk={house.bedrooms}
                        price={house.price}
                    />
                );
            })}
        </>
    );
}
export default React.memo(TempIndex);