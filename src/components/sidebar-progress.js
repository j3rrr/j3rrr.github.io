import React from "react"
import {Link} from 'gatsby'
import Image from './Image'

import sidebarProgStyles from './sidebar-prog.module.scss'

const SidebarProgress = () => {

    return (
        <>
        <div className={sidebarProgStyles.progressContainer}>
            <Link to="/progress-nyalotha">
            <div className={sidebarProgStyles.progressContainerNathria}>
            <Image
                src='images/progress/nathria.png'
                className={sidebarProgStyles.imageGrey}
                alt='nathria progress'
                />
                {/* <img src={nathria} className={sidebarProgStyles.imageGrey} alt="nathria progress"></img> */}
            </div>
            </Link>
           
        </div>
        </>
    )
}

export default SidebarProgress