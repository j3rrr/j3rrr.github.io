import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'
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
       
        <div class={footerStyles.footer}>
             <span className={footerStyles.linkContainer}>
             <a href="https://worldofwarcraft.com/de-de/guild/eu/aegwynn/zero" target="_blank" rel="noreferrer">
                    <span class="icon-wow"> </span>
                </a>
                <a href="https://raider.io/guilds/eu/aegwynn/Zero" target="_blank" rel="noreferrer">
                    <span class="icon-raiderio"> </span>
                </a>
               
            </span>
            <span className={footerStyles.copyr}>
                <Link to="/posts/1">Archiv</Link>
                <GiUnicorn /> {data.site.siteMetadata.guild} @ {data.site.siteMetadata.realm}, © 2020
            </span>
           
        </div>
    )
}

export default Footer