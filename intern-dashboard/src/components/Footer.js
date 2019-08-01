import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => (
    <div className="footer">
       <Link to={'/'}>Home</Link>
       <Link to={'/about'}>About</Link>
       <a href='https://www.kcmo.gov/'>City Offices</a>
    </div>
);

export default Footer 


