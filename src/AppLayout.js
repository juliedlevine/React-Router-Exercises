import React from 'react';
import { Link, IndexLink } from 'react-router';

const AppLayout = ({ children }) =>
    <div>

        <div className="nav-container">
            <ul className="nav">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/counter" activeClassName="active">Counter</Link></li>
                <li><Link to="/gallery" activeClassName="active">Gallery</Link></li>
                <li><Link to="/dragon" activeClassName="active">Dragon</Link></li>
                <li><Link to="/weather/atlanta" activeClassName="active">Weather ATL</Link></li>
                <li><Link to="/weather/new orleans" activeClassName="active">Weather NOLA</Link></li>
            </ul>
        </div>

        <div>
            {children}
        </div>

    </div>;


export default AppLayout;
