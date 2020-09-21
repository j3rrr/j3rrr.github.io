import React from 'react'
import {Link} from 'gatsby'

import sidebarNavStyles from './sidebar-nav.module.scss'

const SidebarNav = () => {
    return (
        <div>
            <nav className={sidebarNavStyles.fill}>
                <ul>
                    <li>
                        <Link activeClassName={sidebarNavStyles.active} to="/">Home</Link>
                    </li>
                    <li>
                        <Link activeClassName={sidebarNavStyles.active} to="/about">Die Gilde</Link>
                    </li>
                    <li>
                        <Link activeClassName={sidebarNavStyles.active} to="/recruit">Recruit</Link>
                    </li>
                    <li>
                        <Link activeClassName={sidebarNavStyles.active} to="/about">WoW Progress</Link>
                    </li>
                    <li>
                        <Link activeClassName={sidebarNavStyles.active} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <a href="https://worldofwarcraft.com/de-de/guild/eu/aegwynn/zero" target="_blank" rel="noreferrer">Arsenal</a>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}

export default SidebarNav