import React, { useState, useEffect } from "react"
//import {Link, graphql, useStaticQuery} from 'gatsby'

import Recruit from '../components/recruit'
import SidebarNav from '../components/sidebar-nav'
import SidebarProgress from '../components/sidebar-progress'
import sidebarStyles from './sidebar.module.scss'
import Image from '../components/Image'

// const Sidebar = () => {
// export default class Sidebar extends React.Component {
    const Sidebar = () => {

    

    // render(){

        // Client-side Runtime Data Fetching
        //const [guildName, setGuildName] = useState(0)
        const [realmName, setRealmName] = useState(1)
        const [realmRank, setRealmRank] = useState(2)
        const [progression, setProgression] = useState(3)
        useEffect(() => {
            // get data from GitHub api
            fetch(`https://raider.io/api/v1/guilds/profile?region=eu&realm=aegwynn&name=zero&fields=raid_progression%2Craid_rankings`)
            .then(response => response.json()) // parse JSON from request
            .then(resultData => {
                //setGuildName(resultData.name)
                setRealmName(resultData.realm)
                setRealmRank(resultData.raid_rankings["nyalotha-the-waking-city"].mythic.realm)
                setProgression(resultData.raid_progression["nyalotha-the-waking-city"].summary)
            }) // set data for the number of stars
        }, [])
        // const {loading, fetchData} = this.state

        return (
            <div className="sidebar">
                <div>
                    <div className={sidebarStyles.logo}>
                        <Image src="images/logo_header.png" />
                    </div>
                </div>
                <SidebarNav />
                <SidebarProgress />
                <Recruit />
                <a href="https://www.wowprogress.com/guild/eu/aegwynn/Zero" target="_blank" rel="noreferrer">
                    <div className={sidebarStyles.rankwidget}>
                        {/* <span>{guildName} </span> */}
                        <p className={sidebarStyles.realmname}>{realmName}</p>
                        <p className={sidebarStyles.subtitle}>Realm Rank</p>
                        <p className={sidebarStyles.realmrank}>{realmRank}</p>
                        <p className={sidebarStyles.progression}>{progression}</p>
                    </div>
                </a>
                
            </div> 
        )
    }
//}

export default Sidebar

