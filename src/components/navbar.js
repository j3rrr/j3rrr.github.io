import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

//import navbarStyles from './navbar.module.scss'

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="nav-wrapper-grid">
                <ul class="nav-links">
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
                        <Link to="/about">WoW Progress</Link>
                    </li>
                    <li><a href="https://worldofwarcraft.com/de-de/guild/eu/aegwynn/zero" target="_blank" rel="noreferrer">Arsenal</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar