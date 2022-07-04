import React from "react";
import Template from './Templates';
import './Templates.css';
import Tempdata from './Tempdata.jsx';
import context  from './Context'
import { useContext } from "react";
import { useEffect } from "react";


const TempIndex = () => {

    const val=useContext(context);
    //console.log("dd");
    console.log(val);
    return(
        <>
        
            {Tempdata.map((val) => {
                return (
                    <Template
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        address={val.address}
                        bhk={val.bhk}
                        price={val.price}
                    />
                );
            })}
        </>
    );
}
export default React.memo(TempIndex);