
import React from 'react';

const InternList = ({interns}) => {
    return (
        <div >
                {interns.map(intern => 
                  <div key={intern.id} className="intern-text" >
                      <ul>
                   <button><h5 className="intern-text">{intern.name} - {intern.job}</h5></button>  
                   </ul>
                 </div>
                 )}
        </div>
    )
}
            // <div >
            //      {props.interns.map(intern => 
            //         <div key={intern.id} className="intern-text" >
            //             <ul>
            //           <button><h5 className="intern-text">{intern.name} - {intern.job}</h5></button>  
            //             </ul>
            //         </div>
            //         )}
                     
            // </div>


export default InternList 