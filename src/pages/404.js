import React from 'react'
// import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from '../components/Image'

import Layout from '../components/layout'
import Head from '../components/head'
import fourohfour from './404.module.scss'

const NotFound = () => {
    return (
        <Layout>
            <Head title="haiyaa" />
            <div className={fourohfour.gridwrapper}>
                {/* <div className={fourohfour.fourohfour}> */}
                <div className={fourohfour.bgcontainer}>
                    <h1>Haiyaa</h1>
                    <p>Diese Seite gibt es leider nicht...</p>
                    
                        {/* <span>Diese Seite gibt es leider nicht...</span> */}
                    <Image 
                        src="images/404.svg"
                    />
                    <AniLink className={fourohfour.backlink} to="/"><span className="icon-hearthstone"> </span></AniLink>
                    
                    </div>
                    
                {/* </div> */}
            </div>
        </Layout>
    )
}

export default NotFound