import React from 'react'
import {Link} from 'gatsby'

import sidebarNavStyles from './sidebar-prog.module.scss'

const SidebarProgress = () => {
    return (
        <div className={sidebarNavStyles.progressContainer}>
            <Link to="/about">
            <div className={sidebarNavStyles.progressContainerNathria}>
                <img src="../progress/nathria.png" className={sidebarNavStyles.imageGrey}></img>
            </div>
            </Link>
        </div>
        
    )
}

export default SidebarProgress