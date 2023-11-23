import React from "react";
import '../Css/Card.css';
import nptel from '../images/nptel.png';
import web from '../images/web.png';
import code from '../images/code.png';
import lang from '../images/python.png';
function Card({Certification}){
    const imagefunction=(value)=>{
        if(value==='nptel')
        return nptel;
    else if(value==='web')
    {
        return web;
    }
    else if(value==='code')
    {
        return code;
    }
    else if(value==='lang')
    {
        return lang;
    }
}
    return(
        <>
        <div className="my">
        <h2>{Certification.H}</h2>
        <p>{Certification.P}</p>
        <div className="pic">
        <img src={imagefunction(Certification.i)} alt="c"/>
        </div>
        </div>
        

        </>
    );
}
export default Card;