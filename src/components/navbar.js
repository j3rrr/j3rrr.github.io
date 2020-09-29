import React from 'react'
import sidebarNavStyles from './sidebar-nav.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"

//import navbarStyles from './navbar.module.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-wrapper-grid">
                <ul className="nav-links">
                <li key="home">
                    <AniLink
                        fade
                        activeClassName={sidebarNavStyles.active}
                        to="/"
                        rel="home"
                    >
                        Home
                    </AniLink>
                    </li>
                    <li key="about">
                    <AniLink
                        fade
                        activeClassName={sidebarNavStyles.active}
                        to="/about"
                        rel="home"
                    >
                        Die Gilde
                    </AniLink>
                    </li>
                    <li key="recruit">
                    <AniLink
                        fade
                        activeClassName={sidebarNavStyles.active}
                        to="/recruit"
                        rel="home"
                    >
                        Recruit
                    </AniLink>
                    </li>
                    <li key="gallery">
                    <AniLink
                        fade
                        activeClassName={sidebarNavStyles.active}
                        to="/gallery/1"
                        rel="home"
                    >
                        Zero Life
                    </AniLink>
                    </li>
                    <li key="posts">
                    <AniLink
                        fade
                        activeClassName={sidebarNavStyles.active}
                        to="/posts/1"
                        rel="home"
                    >
                        Archiv
                    </AniLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar