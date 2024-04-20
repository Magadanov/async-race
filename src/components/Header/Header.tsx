import { Link, useLocation } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';
import { GiTrophyCup } from 'react-icons/gi';
import React from 'react';
import './Header.scss';

export default function Header() {
    const location = useLocation();

    const garageRegex = /^(\/|\/garage)\/?$/;

    const winnerRegex = /^\/winners\/?$/;

    return (
        <header className="header">
            <div className="navbar">
                <div className="nav nav-garage">
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname.match(garageRegex) ? 'active' : ''}`}
                    >
                        Garage <FaCar />
                    </Link>
                </div>
                <div className="nav nav-winners">
                    <Link
                        to="/winners"
                        className={`nav-link ${location.pathname.match(winnerRegex) ? 'active' : ''}`}
                    >
                        Winners <GiTrophyCup />
                    </Link>
                </div>
            </div>
        </header>
    );
}
