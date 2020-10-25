import React from "react"
import twitchCardStyles from "./twitchcard.module.scss"
import Image from "../components/Image"
const { Component } = React

class TwitchCard extends Component {
  render() {
    const { channel } = this.props

    return (
      <>
        <div>{channel}</div>
      </>
    )
  }
}

export default TwitchCard
