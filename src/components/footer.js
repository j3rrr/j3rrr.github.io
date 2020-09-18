import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'

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
        <footer className={footerStyles.footer}>
            <p>{data.site.siteMetadata.guild} @ {data.site.siteMetadata.realm}, © 2020</p>
        </footer>
    )
}

export default Footer