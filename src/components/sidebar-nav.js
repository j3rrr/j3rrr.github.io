import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import sidebarNavStyles from './sidebar-nav.module.scss'

const SidebarNav = () => {
    return (
        <div>
            <nav className={sidebarNavStyles.fill}>
                <ul>
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
                    {/* <li>
                        <a href="https://www.wowprogress.com/guild/eu/aegwynn/Zero" target="_blank" rel="noreferrer">WoW Progress</a>
                    </li>
                    <li>
                        <a href="https://worldofwarcraft.com/de-de/guild/eu/aegwynn/zero" target="_blank" rel="noreferrer">Arsenal</a>
                    </li> */}
                </ul>
            </nav>
        </div>
        
    )
}

export default SidebarNav