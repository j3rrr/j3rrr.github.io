import React from "react"
//import {Link} from 'gatsby'
//import { SRLWrapper } from "simple-react-lightbox";

import Layout from "../components/layout"
import Head from "../components/head"
import RosterCard from "../components/rostercard"
//import TwitchCard from "../components/twitchcard"

import rosterStyles from "./roster.module.scss"

const RosterPage = () => {
  const rosterArray = [
    {
      name: "Olympea",
      charClass: "priest",
      charRace: "draenei",
      charUrl: "104/131183464",
      rank: "Gildenleiterin",
      role: "heal",
    },
    {
      name: "Nerroc",
      charClass: "paladin",
      charRace: "human",
      charUrl: "14/116264718",
      rank: "Offizier",
      role: "tank",
    },
    {
      name: "Karen",
      charClass: "hunter",
      charRace: "gnome",
      charUrl: "212/168556244",
      rank: "Offizier",
      role: "dps",
    },
    {
      name: "Kaffeecrema",
      charClass: "shaman",
      charRace: "draenei",
      charUrl: "163/171984291",
      rank: "Offizier",
      role: "heal",
    },
    {
      name: "Pummlbot",
      charClass: "monk",
      charRace: "mechagnome",
      charUrl: "226/181897698",
      rank: "Raider",
      role: "tank",
    },

    {
      name: "Kerrídwen",
      charClass: "druid",
      charRace: "nightelf",
      charUrl: "46/111754542",
      rank: "Raider",
      role: "heal",
    },
    {
      name: "Valtica",
      charClass: "priest",
      charRace: "dwarf",
      charUrl: "46/178827822",
      rank: "Raider",
      role: "heal",
    },
    {
      name: "Yabajin",
      charClass: "druid",
      charRace: "nightelf",
      charUrl: "196/111845060",
      rank: "Raider",
      role: "heal",
      channel: "dr_yabajin",
    },
    {
      name: "Rhiin",
      charClass: "warlock",
      charRace: "human",
      charUrl: "26/110831642",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Meerjungfrau",
      charClass: "paladin",
      charRace: "lightdraenei",
      charUrl: "141/188162445",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Mützendude",
      charClass: "druid",
      charRace: "kultiran",
      charUrl: "226/110705122",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Zarulesca",
      charClass: "hunter",
      charRace: "nightelf",
      charUrl: "23/111846167",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Xalandir",
      charClass: "mage",
      charRace: "human",
      charUrl: "55/180945719",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Íkè",
      charClass: "warrior",
      charRace: "human",
      charUrl: "77/148200781",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Âkámé",
      charClass: "shaman",
      charRace: "panda",
      charUrl: "6/109955334",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Gubin",
      charClass: "rogue",
      charRace: "voidelf",
      charUrl: "228/134896356",
      rank: "Raider",
      role: "dps",
      channel: "gubinplays",
    },
    {
      name: "Mayendriel",
      charClass: "deathknight",
      charRace: "voidelf",
      charUrl: "9/179094025",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Springfixer",
      charClass: "deathknight",
      charRace: "human",
      charUrl: "4/110912516",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Láucian",
      charClass: "hunter",
      charRace: "nightelf",
      charUrl: "71/187970887",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Fyda",
      charClass: "mage",
      charRace: "human",
      charUrl: "155/186204827",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Lefter",
      charClass: "demonhunter",
      charRace: "nightelf",
      charUrl: "21/186108693",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Glenfarclas",
      charClass: "warlock",
      charRace: "dwarf",
      charUrl: "121/151918713",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Kaysah",
      charClass: "hunter",
      charRace: "nightelf",
      charUrl: "91/188984411",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Shoc",
      charClass: "shaman",
      charRace: "dwarf",
      charUrl: "218/185629658",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Warperkz",
      charClass: "warrior",
      charRace: "human",
      charUrl: "140/192146316",
      rank: "Raider",
      role: "dps",
    },
    {
      name: "Vollderottø",
      charClass: "warlock",
      charRace: "gnome",
      charUrl: "89/156086105",
      rank: "Raider",
      role: "dps",
    },
  ]
  return (
    <Layout>
      <Head title="Raidkader" />
      <div className={rosterStyles.rosterSiteWrapper}>
        <h2>Mythic Raid Kader</h2>

        <div className={rosterStyles.rosterWrapper}>
          {rosterArray.map(char => (
            <RosterCard
              name={char.name}
              charClass={char.charClass}
              charRace={char.charRace}
              charUrl={char.charUrl}
              rank={char.rank}
              role={char.role}
              channel={char.channel}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default RosterPage
