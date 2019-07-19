import React from 'react';


const Interns = (props) => {
    
    // const renderInterns = props.interns.map(intern =>
    //     <h3 className="intern-text">{intern.name} - {intern.job}</h3>
    //     )

        return (
            <div>
                <h1>Interns</h1>
                {props.interns.map(intern => <h3 className="intern-text">{intern.name} - {intern.job}</h3>  )}
            </div>
        )
};

export default Interns 