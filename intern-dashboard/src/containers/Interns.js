import React from 'react';

const Interns = ({interns}) => {
    const renderInterns = interns.map(intern =>
        <h3 className="intern-text">{intern.name} - {intern.job}</h3>
        
        )

        return (
            <div>
                <h1>Interns</h1>
                {renderInterns}
            </div>
        )
};

export default Interns 