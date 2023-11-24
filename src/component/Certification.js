import React from 'react';
import Card from './Card';
import '../Css/Certification.css'

function Certification()
{
    const certificationp=[{
        H:"NPTEL",
        i:"nptel"
    },
    {

        H:"WEB DEV",
        i:"web" 
    }
]
const certificationq=[
    {

        H:"CODE YOURSELF",
        i:"code" 
    },

   
    {
        H:"PYTHON",
        i:"lang"

    }

]
return(
    <>
    <h1>certification</h1>
    <div id="card-flex">
        
        {
         certificationp.map((item)=>(<Card Certification={item} />))
   
        }
     
    </div>
    <div className="cards">
        
        {
         certificationq.map((item)=>(<Card Certification={item} />))
   
        }
     
    </div>
    </>
);
}
export default Certification;