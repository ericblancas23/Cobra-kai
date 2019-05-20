import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

export const Nav = () => (
    <React.Fragment>
        <ul className="nav text-danger">
            <li className="nav-list">
                <Link to='/' className="nav-link text-danger">Home</Link>
            </li>
            <li className="nav-list">
                <Link to='/programs' className="nav-link text-danger">Programs</Link>
            </li>
            <li className="nav-list">
                <Link to='/schedule' className="nav-link text-danger">Schedule</Link>
            </li>
            <li className="nav-list">
                <Link to='/about' className="nav-link text-danger">About</Link>
            </li>
            <li className="nav-list">
                <Link to='/contact' className="nav-link text-danger">Contact</Link>
            </li>
        </ul>
        <hr />
    </React.Fragment>
)