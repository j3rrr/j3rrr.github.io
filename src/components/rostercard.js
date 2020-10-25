import React from "react"
import rosterCardStyles from "./rostercard.module.scss"
import Image from "../components/Image"
import { FaTwitch } from "react-icons/fa"
const { Component } = React

class RosterCard extends Component {
  render() {
    const {
      name,
      charClass,
      charRace,
      charUrl,
      rank,
      role,
      channel,
    } = this.props
    const imageUrl = `https://render-eu.worldofwarcraft.com/character/aegwynn/${charUrl}-main.jpg`
    const armoryUrl = `https://worldofwarcraft.com/de-de/character/eu/aegwynn/${name}`
    const rioUrl = `https://raider.io/characters/eu/aegwynn/${name}`
    var twitchUrl
    function hasTwitch(channel) {
      if (channel != null) {
        twitchUrl = `https://twitch.tv/${channel}`
        return true
      } else {
        return false
      }
    }

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
          {/* <div className={rosterCardStyles.rank}>{rank}</div> */}
          <div className={rosterCardStyles.role}>
            {role === "heal" && (
              <>
                {/* <span className="icon-healicon"> </span> */}
                <Image src="images/healicon.svg"></Image>
              </>
            )}
            {role === "tank" && (
              <>
                {/* <span className="icon-tankicon"> </span> */}
                <Image src="images/tankicon.svg"></Image>
              </>
            )}
            {role === "dps" && (
              <>
                {/* <span className="icon-dpsicon"> </span> */}
                <Image src="images/dpsicon.svg"></Image>
              </>
            )}
            {role === "caster" && (
              <>
                {/* <span className="icon-castericon"> </span> */}
                <Image src="images/castericon.svg"></Image>
              </>
            )}
          </div>

          <div
            className={`${rosterCardStyles.name} ${rosterCardStyles[charClass]}`}
          >
            {name}
          </div>
          {rank === "Gildenleiterin" && (
            <>
              <div className={rosterCardStyles.rank}>{rank}</div>
            </>
          )}
          {rank === "Offizier" && (
            <>
              <div className={rosterCardStyles.rank}>{rank}</div>
            </>
          )}

          <div className={rosterCardStyles.linkContainer}>
            <a href={armoryUrl} target="_blank" rel="noreferrer">
              <span className="icon-wow"> </span>
            </a>
            <a href={rioUrl} target="_blank" rel="noreferrer">
              <span className="icon-raiderio"> </span>
            </a>
            {hasTwitch(channel) && (
              <>
                <a href={twitchUrl} target="_blank" rel="noreferrer">
                  <FaTwitch />
                </a>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default RosterCard
