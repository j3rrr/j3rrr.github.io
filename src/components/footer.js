import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

//import footerStyles from './footer.module.scss'
import { GiUnicorn } from "react-icons/gi";

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    title, guild, realm
                }
            }
        }
    `)
    return (
       
        <div className="footer">
             <span className="linkContainer">
             <a href="https://worldofwarcraft.com/de-de/guild/eu/aegwynn/zero" target="_blank" rel="noreferrer">
                    <span className="icon-wow"> </span>
                </a>
                <a href="https://raider.io/guilds/eu/aegwynn/Zero" target="_blank" rel="noreferrer">
                    <span className="icon-raiderio"> </span>
                </a>
               
            </span>
            <span className="copyr">
                <Link to="/posts/1">Archiv</Link>
                <GiUnicorn /> {data.site.siteMetadata.guild} @ {data.site.siteMetadata.realm}, © 2020
            </span>
           
        </div>
    )
}

export default Footer