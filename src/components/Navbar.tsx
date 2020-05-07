import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2 px1">
                <NavLink to="/" className="brand-logo">React + TypeScript</NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">To do list</NavLink></li>
                    <li><NavLink to="/about">Info</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}