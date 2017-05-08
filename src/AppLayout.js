import { Link, IndexLink } from 'react-router';
import React from 'react';

const AppLayout = ({ children }) =>
    <div>
        <div className="nav-container">
            <ul className="nav">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/counter" activeClassName="active">Counter</Link></li>
                <li><Link to="/gallery" activeClassName="active">Gallery</Link></li>
                <li><Link to="/dragon" activeClassName="active">Dragon</Link></li>
                <li><Link to="/weather/:name" activeClassName="active">Weather</Link></li>
            </ul>
        </div>
        <div>
            {children}
        </div>
    </div>;


export default AppLayout;
