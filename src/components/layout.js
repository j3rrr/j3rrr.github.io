import React from 'react'
//import {Link} from 'gatsby'


import '../styles/index.scss'
import Footer from '../components/footer'
import BigTop from '../components/bigtop'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
//import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        
        <div class="grid-container">
            <BigTop />
            <Navbar />
            <Sidebar />
            <div class="content">
                {props.children}    
            </div>
            <Footer />
        </div>
      
    )
}

export default Layout

        // <div className={layoutStyles.container}>
        //     <div className={layoutStyles.content}>
        //         <Header />
        //         {props.children}
        //     </div>            
        //     <Footer />
        // </div>