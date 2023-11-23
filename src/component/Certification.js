import React from 'react';
import Card from './Card';
function Certification()
{
    const certificationp=[{
        H:"NPTEL",
        i:"nptel"
    },
    {

        H:"WEB DEV",
        i:"web" 
    },
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
    <div>
        {
         certificationP.map((item)=>(<Card Certification={item} />))
   
        }
    </div>
);
}
export default Certification;