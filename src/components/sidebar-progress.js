import React from "react"
import Image from './Image'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import sidebarProgStyles from './sidebar-prog.module.scss'

const SidebarProgress = () => {

    return (
        <>
        <div className={sidebarProgStyles.progressContainer}>
             <AniLink
                fade
                to="/progress-nyalotha"
                rel="nyalothaprogress"
            >                
                <div className={sidebarProgStyles.progressContainerNathria}>
                <Image
                    src='images/progress/nathria.png'
                    className={sidebarProgStyles.imageGrey}
                    alt='nathria progress'
                    />
                    {/* <img src={nathria} className={sidebarProgStyles.imageGrey} alt="nathria progress"></img> */}
                </div>
            </AniLink>
           
        </div>
        </>
    )
}

export default SidebarProgress