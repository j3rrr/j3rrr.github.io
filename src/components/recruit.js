import React from 'react'
import Image from './Image'

import sidebarStyles from './sidebar.module.scss'

const recruitSpec = require('../data/recruit.json')


function checkSpec(klasse, spec) {
    if(!recruitSpec[klasse][spec].active) {
        return "specNo";
    } else {
        return "specYes"
    }
}

// function getIcon(klasse, spec){
//     return recruitSpec[klasse][spec].icon
// }


const Recruit = () => {
    
    return (
        <div class="recruit">
            <span className={sidebarStyles.title}>Wir suchen:</span>
            <div className={sidebarStyles.recruitList}> 
           
            <span className={sidebarStyles.dh}>Dämonenjäger </span>
                <span>
                    <Image
                        src="images/spec/demonhunter/vengeance.png"
                        className={sidebarStyles[checkSpec("dh", "vengeance")]}
                        alt="dh vengeance"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/demonhunter/havoc.png"
                        className={sidebarStyles[checkSpec("dh", "havoc")]}
                        alt="dh havoc"
                        style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.druid}>Druide</span>
                <span>
                    <Image
                        src="images/spec/druid/guardian.png"
                        className={sidebarStyles[checkSpec("druid", "guardian")]}
                        alt="druid guardian"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/druid/feral.png"
                        className={sidebarStyles[checkSpec("druid", "feral")]}
                        alt="druid feral"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/druid/balance.png"
                        className={sidebarStyles[checkSpec("druid", "balance")]}
                        alt="druid balance"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/druid/restoration.png"
                        className={sidebarStyles[checkSpec("druid", "resto")]}
                        alt="druid resto"
                        style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.warlock}>Hexenmeister</span>
                <span>
                    <Image
                        src="images/spec/warlock/affliction.png"
                        className={sidebarStyles[checkSpec("warlock", "affli")]}
                        alt="warlock affli"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/warlock/destruction.png"
                        className={sidebarStyles[checkSpec("warlock", "destro")]}
                        alt="warlock destro"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/warlock/demonology.png"
                        className={sidebarStyles[checkSpec("warlock", "demo")]}
                        alt="warlock demo"
                        style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.hunter}>Jäger</span>
                <span>
                    <Image
                        src="images/spec/hunter/beastmastery.png"
                        className={sidebarStyles[checkSpec("hunter", "bm")]}
                        alt="hunter bm"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/hunter/marksman.png"
                        className={sidebarStyles[checkSpec("hunter", "mm")]}
                        alt="hunter mm"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/hunter/survival.png"
                        className={sidebarStyles[checkSpec("hunter", "surv")]}
                        alt="hunter surv"
                        style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.warrior}>Krieger</span>
                <span>
                    <Image
                        src="images/spec/warrior/protection.png"
                        className={sidebarStyles[checkSpec("warrior", "prot")]}
                        alt="warrior prot"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/warrior/fury.png"
                        className={sidebarStyles[checkSpec("warrior", "fury")]}
                        alt="warrior fury"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/warrior/arms.png"
                        className={sidebarStyles[checkSpec("warrior", "arms")]}
                        alt="warrior arms"
                        style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.mage}>Magier</span>
                <span>
                    <Image
                        src="images/spec/mage/frost.png"
                        className={sidebarStyles[checkSpec("mage", "frost")]}
                        alt="mage frost"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/mage/fire.png"
                        className={sidebarStyles[checkSpec("mage", "fire")]}
                        alt="mage fire"
                        style={{width:'16px',height:'16px'}}
                    />
                    <Image
                        src="images/spec/mage/arcane.png"
                        className={sidebarStyles[checkSpec("mage", "arcane")]}
                        alt="mage arcane"
                        style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.monk}>Mönch</span>
                <span>
                    <Image
                    src='images/spec/monk/brewmaster.png'
                    className={sidebarStyles[checkSpec('monk', 'bm')]}
                    alt='monk bm'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/monk/windwalker.png'
                    className={sidebarStyles[checkSpec('monk', 'ww')]}
                    alt='monk ww'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/monk/mistweaver.png'
                    className={sidebarStyles[checkSpec('monk', 'mw')]}
                    alt='monk mw'
                    style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.paladin}>Paladin</span>
                <span>
                    <Image
                    src='images/spec/paladin/protection.png'
                    className={sidebarStyles[checkSpec('paladin', 'prot')]}
                    alt='paladin prot'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/paladin/retribution.png'
                    className={sidebarStyles[checkSpec('paladin', 'ret')]}
                    alt='paladin ret'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/paladin/holy.png'
                    className={sidebarStyles[checkSpec('paladin', 'holy')]}
                    alt='paladin holy'
                    style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.priest}>Priester</span>
                <span>
                    <Image
                    src='images/spec/priest/shadow.png'
                    className={sidebarStyles[checkSpec('priest', 'shadow')]}
                    alt='priest shadow'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/priest/holy.png'
                    className={sidebarStyles[checkSpec('priest', 'holy')]}
                    alt='priest holy'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/priest/discipline.png'
                    className={sidebarStyles[checkSpec('priest', 'disc')]}
                    alt='priest disc'
                    style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.shaman}>Schamane</span>
                <span>
                    <Image
                    src='images/spec/shaman/elemental.png'
                    className={sidebarStyles[checkSpec('shaman', 'ele')]}
                    alt='shaman ele'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/shaman/enhancement.png'
                    className={sidebarStyles[checkSpec('shaman', 'enh')]}
                    alt='shaman enh'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/shaman/restoration.png'
                    className={sidebarStyles[checkSpec('shaman', 'resto')]}
                    alt='shaman resto'
                    style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.rogue}>Schurke</span>
                <span>
                    <Image
                    src='images/spec/rogue/combat.png'
                    className={sidebarStyles[checkSpec('rogue', 'outlaw')]}
                    alt='rogue outlaw'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/rogue/assassination.png'
                    className={sidebarStyles[checkSpec('rogue', 'assa')]}
                    alt='rogue assa'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/rogue/sublety.png'
                    className={sidebarStyles[checkSpec('rogue', 'sub')]}
                    alt='rogue sub'
                    style={{width:'16px',height:'16px'}}
                    />
                </span>
                <span className={sidebarStyles.dk}>Todesritter</span>
                <span>
                    <Image
                    src='images/spec/deathknight/blood.png'
                    className={sidebarStyles[checkSpec('dk', 'blood')]}
                    alt='dk blood'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/deathknight/frost.png'
                    className={sidebarStyles[checkSpec('dk', 'frost')]}
                    alt='dk frost'
                    style={{width:'16px',height:'16px'}}
                    />
                    <Image
                    src='images/spec/deathknight/unholy.png'
                    className={sidebarStyles[checkSpec('dk', 'unholy')]}
                    alt='dk unholy'
                    style={{width:'16px',height:'16px'}}
                    />
                </span>
            </div>  
        </div> 
    )
}

export default Recruit

