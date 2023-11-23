import React from "react";
import Load from "../images/ZKZg.gif";
import '../Css/Loader.css';
function Loader()
{
    return(
        <>
        <div className="load">
            <img src={Load} alt="loading"/>
        </div>
        </>
    );
}
export default Loader;