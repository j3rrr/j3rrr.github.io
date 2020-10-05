import React from "react"
import rosterCardStyles from "./rostercard.module.scss"
const { Component } = React

class RosterCard extends Component {
  render() {
    const { name, charClass, charRace, charUrl, rank } = this.props
    const imageUrl = `https://render-eu.worldofwarcraft.com/character/aegwynn/${charUrl}-main.jpg`
    const armoryUrl = `https://worldofwarcraft.com/de-de/character/eu/aegwynn/${name}`
    const rioUrl = `https://raider.io/characters/eu/aegwynn/${name}`
    var bgimage = {
      backgroundImage: `url(${imageUrl})`,
    }
    var circleClass = `circle${charClass}`
    return (
      <>
        <div className={rosterCardStyles.rosterCard} key={name}>
          {/* <img src={imageUrl} alt={name}></img> */}
          <div className={rosterCardStyles.avatarWrap}>
            <div style={bgimage} className={rosterCardStyles[charRace]}></div>
          </div>
          {/* <div className={rosterCardStyles.avatar}>
            <img src={imageUrl} alt={name}></img>
          </div> */}
          <div className={rosterCardStyles[circleClass]}></div>
          <div className={rosterCardStyles.rank}>{rank}</div>
          <div
            className={`${rosterCardStyles.name} ${rosterCardStyles[charClass]}`}
          >
            {name}
          </div>
          <div className={rosterCardStyles.linkContainer}>
            <a href={armoryUrl} target="_blank" rel="noreferrer">
              <span className="icon-wow"> </span>
            </a>
            <a href={rioUrl} target="_blank" rel="noreferrer">
              <span className="icon-raiderio"> </span>
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default RosterCard
