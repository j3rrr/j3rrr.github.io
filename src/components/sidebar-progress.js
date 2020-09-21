import React from 'react'
import {Link} from 'gatsby'

import sidebarNavStyles from './sidebar-prog.module.scss'

const SidebarProgress = () => {
    return (
        <div className={sidebarNavStyles.progressContainer}>
            <Link to="/progress-nyalotha">
            <div className={sidebarNavStyles.progressContainerNathria}>
                <img src="../progress/nathria.png" className={sidebarNavStyles.imageGrey} alt="nathria progress"></img>
            </div>
            </Link>
        </div>
        
    )
}

export default SidebarProgress