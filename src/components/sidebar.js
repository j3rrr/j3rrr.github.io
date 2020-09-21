import React from 'react'
//import {Link, graphql, useStaticQuery} from 'gatsby'

import Recruit from '../components/recruit'
import SidebarNav from '../components/sidebar-nav'
import SidebarProgress from '../components/sidebar-progress'
import sidebarStyles from './sidebar.module.scss'
import logo from "../images/logo_header.png"

const Sidebar = () => {
    return (
        <div class="sidebar">
            <div>
                <img src={logo} alt="dh vengeance"  className={sidebarStyles.logo}></img>
            </div>
            <SidebarNav />
            <SidebarProgress />
            <Recruit />
            
        </div> 
    )
}

export default Sidebar

