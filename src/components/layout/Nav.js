import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

export const Nav = () => (
    <React.Fragment>
        <ul className="nav">
            <li className="nav-list" style={{marginRight: "0.5cm", marginLeft: "0.5cm"}}>
                <Link to='/' className="nav-link btn btn-outline-danger text-light">Home</Link>
            </li>
            <li className="nav-list" style={{marginRight: "0.5cm"}}>
                <Link to='/programs' className="nav-link btn btn-outline-danger text-light">Programs</Link>
            </li>
            <li className="nav-list" style={{marginRight: "0.5cm"}}>
                <Link to='/schedule' className="nav-link btn btn-outline-danger text-light">Schedule</Link>
            </li>
            <li className="nav-list" style={{marginRight: "0.5cm"}}>
                <Link to='/about' className="nav-link btn btn-outline-danger text-light">About</Link>
            </li>
            <li className="nav-list" style={{marginRight: "0.5cm"}}>
                <Link to='/contact' className="nav-link btn btn-outline-danger text-light">Contact</Link>
            </li>
        </ul>
        <hr />
    </React.Fragment>
)