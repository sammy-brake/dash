import React from 'react';

const Interns = ({interns}) => {
    const renderInterns = interns.map(intern =>
        <span>{intern.name}</span>
        )

        return (
            <div>
                {renderInterns}
            </div>
        )
};

export default Interns 