import React from 'react'
import {Link} from 'gatsby'

//import navbarStyles from './navbar.module.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-wrapper-grid">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Die Gilde</Link>
                    </li>
                    <li>
                        <Link to="/recruit">Recruit</Link>
                    </li>
                    <li>
                        <a href="https://www.wowprogress.com/guild/eu/aegwynn/Zero" target="_blank" rel="noreferrer">WoW Progress</a>
                    </li>
                    <li>
                        <a href="https://worldofwarcraft.com/de-de/guild/eu/aegwynn/zero" target="_blank" rel="noreferrer">Arsenal</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar