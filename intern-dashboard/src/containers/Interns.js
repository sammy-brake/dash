import React from 'react';


const Interns = (props) => {
    
    // const renderInterns = props.interns.map(intern =>
    //     <h3 className="intern-text">{intern.name} - {intern.job}</h3>
    //     )

        return (
            <div className="intern-text">
                <h1>Interns</h1>
                    <div >
                    <ul>
                    {props.interns.map(intern => 
                    <li> <h5 className="intern-text">{intern.name} - {intern.job}</h5></li>)}
                     </ul>
                    </div>
            </div>
        )
};

export default Interns 