import React from 'react'
import {Link} from 'gatsby'
import sidebarNavStyles from './sidebar-nav.module.scss'

//import navbarStyles from './navbar.module.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-wrapper-grid">
                <ul className="nav-links">
                    <li key="home">
                        <Link activeClassName={sidebarNavStyles.active} to="/">Home</Link>
                    </li>
                    <li key="about">
                        <Link activeClassName={sidebarNavStyles.active} to="/about">Die Gilde</Link>
                    </li>
                    <li key="recruit">
                        <Link activeClassName={sidebarNavStyles.active} to="/recruit">Recruit</Link>
                    </li>
                    <li key="posts">
                        <Link activeClassName={sidebarNavStyles.active} to="/posts/1">Archiv</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar