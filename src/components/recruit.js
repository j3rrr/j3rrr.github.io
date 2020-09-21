import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'

import sidebarStyles from './sidebar.module.scss'

const recruitSpec = require('../data/recruit.json')

function checkSpec(klasse, spec) {
    if(!recruitSpec[klasse][spec].active) {
        return "specNo";
    } else {
        return "specYes"
    }
}

function getIcon(klasse, spec){
    return recruitSpec[klasse][spec].icon
}



const Recruit = () => {
    
    return (
        <div class="recruit">
            <span className={sidebarStyles.title}>Wir suchen:</span>
            <div className={sidebarStyles.recruitList}> 
            <span className={sidebarStyles.dh}>Dämonenjäger </span>
                <span>
                    <img className={sidebarStyles[checkSpec("dh", "vengeance")]} src={getIcon("dh", "vengeance")} alt="dh vengeance"></img>
                    <img className={sidebarStyles[checkSpec("dh", "havoc")]} src={getIcon("dh", "havoc")} alt="dh havoc"></img>
                </span>
                <span className={sidebarStyles.druid}>Druide</span>
                <span>
                    <img className={sidebarStyles[checkSpec("druid", "guardian")]} src={getIcon("druid", "guardian")} alt="druid guardian"></img>
                    <img className={sidebarStyles[checkSpec("druid", "feral")]} src={getIcon("druid", "feral")} alt="druid feral"></img>
                    <img className={sidebarStyles[checkSpec("druid", "balance")]} src={getIcon("druid", "balance")} alt="druid balance"></img>
                    <img className={sidebarStyles[checkSpec("druid", "resto")]} src={getIcon("druid", "resto")} alt="druid resto"></img>
                </span>
                <span className={sidebarStyles.warlock}>Hexenmeister</span>
                <span>
                    <img className={sidebarStyles[checkSpec("warlock", "affli")]} src={getIcon("warlock", "affli")} alt="warlock affli"></img>
                    <img className={sidebarStyles[checkSpec("warlock", "destro")]} src={getIcon("warlock", "destro")} alt="warlock destro"></img>
                    <img className={sidebarStyles[checkSpec("warlock", "demo")]} src={getIcon("warlock", "demo")} alt="warlock demo"></img>
                </span>
                <span className={sidebarStyles.hunter}>Jäger</span>
                <span>
                    <img className={sidebarStyles[checkSpec("hunter", "bm")]} src={getIcon("hunter", "bm")} alt="hunter bm"></img>
                    <img className={sidebarStyles[checkSpec("hunter", "mm")]} src={getIcon("hunter", "mm")} alt="hunter mm"></img>
                    <img className={sidebarStyles[checkSpec("hunter", "surv")]} src={getIcon("hunter", "surv")} alt="hunter surv"></img>
                </span>
                <span className={sidebarStyles.warrior}>Krieger</span>
                <span>
                    <img className={sidebarStyles[checkSpec("warrior", "prot")]} src={getIcon("warrior", "prot")} alt="warrior prot"></img>
                    <img className={sidebarStyles[checkSpec("warrior", "fury")]} src={getIcon("warrior", "fury")} alt="warrior fury"></img>
                    <img className={sidebarStyles[checkSpec("warrior", "arms")]} src={getIcon("warrior", "arms")} alt="warrior arms"></img>
                </span>
                <span className={sidebarStyles.mage}>Magier</span>
                <span>
                    <img className={sidebarStyles[checkSpec("mage", "frost")]} src={getIcon("mage", "frost")} alt="mage frost"></img>
                    <img className={sidebarStyles[checkSpec("mage", "fire")]} src={getIcon("mage", "fire")} alt="mage fire"></img>
                    <img className={sidebarStyles[checkSpec("mage", "arcane")]} src={getIcon("mage", "arcane")} alt="mage arcane"></img>
                </span>
                <span className={sidebarStyles.monk}>Mönch</span>
                <span>
                    <img className={sidebarStyles[checkSpec("monk", "bm")]} src={getIcon("monk", "bm")} alt="monk bm"></img>
                    <img className={sidebarStyles[checkSpec("monk", "ww")]} src={getIcon("monk", "ww")} alt="monk ww"></img>
                    <img className={sidebarStyles[checkSpec("monk", "mw")]} src={getIcon("monk", "mw")} alt="monk mw"></img>
                </span>
                <span className={sidebarStyles.paladin}>Paladin</span>
                <span>
                    <img className={sidebarStyles[checkSpec("paladin", "prot")]} src={getIcon("paladin", "prot")} alt="paladin prot"></img>
                    <img className={sidebarStyles[checkSpec("paladin", "ret")]} src={getIcon("paladin", "ret")} alt="paladin ret"></img>
                    <img className={sidebarStyles[checkSpec("paladin", "holy")]} src={getIcon("paladin", "holy")} alt="paladin holy"></img>
                </span>
                <span className={sidebarStyles.priest}>Priester</span>
                <span>
                    <img className={sidebarStyles[checkSpec("priest", "shadow")]} src={getIcon("priest", "shadow")} alt="priest shadow"></img>
                    <img className={sidebarStyles[checkSpec("priest", "holy")]} src={getIcon("priest", "holy")} alt="priest holy"></img>
                    <img className={sidebarStyles[checkSpec("priest", "disc")]} src={getIcon("priest", "disc")} alt="priest disc"></img>
                </span>
                <span className={sidebarStyles.shaman}>Schamane</span>
                <span>
                    <img className={sidebarStyles[checkSpec("shaman", "ele")]} src={getIcon("shaman", "ele")} alt="shaman ele"></img>
                    <img className={sidebarStyles[checkSpec("shaman", "enh")]} src={getIcon("shaman", "enh")} alt="shaman enh"></img>
                    <img className={sidebarStyles[checkSpec("shaman", "resto")]} src={getIcon("shaman", "resto")} alt="shaman resto"></img>
                </span>
                <span className={sidebarStyles.rogue}>Schurke</span>
                <span>
                    <img className={sidebarStyles[checkSpec("rogue", "outlaw")]} src={getIcon("rogue", "outlaw")} alt="rogue outlaw"></img>
                    <img className={sidebarStyles[checkSpec("rogue", "assa")]} src={getIcon("rogue", "assa")} alt="rogue assa"></img>
                    <img className={sidebarStyles[checkSpec("rogue", "sub")]} src={getIcon("rogue", "sub")} alt="rogue sub"></img>
                </span>
                <span className={sidebarStyles.dk}>Todesritter</span>
                <span>
                    <img className={sidebarStyles[checkSpec("dk", "blood")]} src={getIcon("dk", "blood")} alt="dk blood"></img>
                    <img className={sidebarStyles[checkSpec("dk", "frost")]} src={getIcon("dk", "frost")} alt="dk frost"></img>
                    <img className={sidebarStyles[checkSpec("dk", "unholy")]} src={getIcon("dk", "unholy")} alt="dk unholy"></img>
                </span>
            </div>  
        </div> 
    )
}

export default Recruit

