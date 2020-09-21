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
            <Link to="/posts/1">Archiv</Link>
            <GiUnicorn /> {data.site.siteMetadata.guild} @ {data.site.siteMetadata.realm}, © 2020
            
        </div>
    )
}

export default Footer