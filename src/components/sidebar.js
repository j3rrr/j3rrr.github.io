import React from 'react'
//import {Link, graphql, useStaticQuery} from 'gatsby'

import sidebarStyles from './sidebar.module.scss'

import havoc from "../images/spec/demonhunter/havoc.png"
import vengeance from "../images/spec/demonhunter/vengeance.png"

const Sidebar = () => {
    return (
        <div class="sidebar">
            <span className={sidebarStyles.title}>Zero sucht:</span>
            <div className={sidebarStyles.recruitList}>                
                <span className={sidebarStyles.dh}>Dämonenjäger </span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                    
                <span className={sidebarStyles.druid}>Druide</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                <span className={sidebarStyles.warlock}>Hexenmeister</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                <span className={sidebarStyles.hunter}>Jäger</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                <span className={sidebarStyles.warrior}>Krieger</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                <span className={sidebarStyles.mage}>Magier</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                <span className={sidebarStyles.monk}>Mönch</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                <span className={sidebarStyles.paladin}>Paladin</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                <span className={sidebarStyles.priest}>Priester</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                <span className={sidebarStyles.shaman}>Schamane</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                <span className={sidebarStyles.rogue}>Schurke</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
                <span className={sidebarStyles.dk}>Todesritter</span>
                <span>
                    <img src={havoc} alt="dh havoc"></img>
                    <img className={sidebarStyles.specNo} src={vengeance} alt="dh vengeance"></img>
                </span>
            </div>  
        </div> 
    )
}

export default Sidebar

