import React from 'react'
//import {Link} from 'gatsby'
//import { SRLWrapper } from "simple-react-lightbox";

import Layout from '../components/layout'
import Head from '../components/head'

import aboutStyles from './about.module.scss'

const AboutPage = () => {
	// var bgimage = {
	// 	backgroundImage: `url(./images/gallery/WoWScrnShot_050519_215213.jpg)`,
	// }
	// const options = {
  //   settings: {
  //     autoplaySpeed: 4000,
      
  //     lightboxTransitionSpeed: 0.6,
  //     lightboxTransitionTimingFunction: 'linear',
  //     slideAnimationType: 'fade',
  //     slideSpringValues: [300, 200],
  //     slideTransitionSpeed: 1,
  //     slideTransitionTimingFunction: 'linear'
  //   },
  //   buttons: {
  //     iconColor: "rgba(211, 186, 134, 0.8)",
  //     showAutoplayButton: false,
  //     showCloseButton: true,
  //     showDownloadButton: true,
  //     showFullscreenButton: true,
  //     showNextButton: false,
  //     showPrevButton: false,
  //     showThumbnailsButton: false,
  //   },
  //   thumbnails: {
  //     showThumbnails: false,
  //     thumbnailsAlignment: 'center',
  //     thumbnailsContainerBackgroundColor: 'transparent',
  //     thumbnailsContainerPadding: '10px',
  //     thumbnailsGap: '5px',
  //     thumbnailsOpacity: 0.3,
  //     thumbnailsPosition: 'bottom',
  //     thumbnailsSize: ['100px', '80px']
  //   },
  //   progressBar: {
  //     backgroundColor: '#000000',
  //     fillColor: '#D3BA86',
  //     height: '3px',
  //     showProgressBar: true
  //   },
  //   caption: {
  //     showCaption: false
  //   }
	// };
	
	return (
		<Layout>
		<Head title="Die Gilde" />
		<div className={aboutStyles.aboutWrapper}>
			<div  className={aboutStyles.aboutContent}>
				<h2>Storytime...</h2>
				<p>
					Alles begann im September 2016. Eine kleine Gruppe von Spielern mit Bock zum Raiden hatte sich zusammengefunden und die Gilde Tempelwächter gegründet.			
					So richtig durchgestartet sind wir im April 2017, als durch eine Fusion &lt; Zero &gt; entstanden ist. Seitdem haben wir viel erlebt und sind zu einer familiären Gemeinschaft zusammen gewachsen.
					Damit das auch weiterhin so bleibt, ist uns ein lockerer, aber respektvoller Umgang miteinander besonders wichtig.
				</p>
				<p>
					Ingame liegt unser Fokus darauf, den aktuellen Mythic-Content möglichst erfolgreich zu bewältigen, wobei uns jedoch die Atmosphäre und die einzelnen Spieler wichtiger sind, als der Wettkampf mit anderen Gilden - auch wenn das bedeutet, dass der ein oder andere Boss mal etwas länger dauert.
					
				</p>
				<p>
					Unsere gemeinsame Zeit verbringen wir mittlerweile aber nicht mehr nur in World of Warcraft und anderen Spielen, sondern auch im Real-Life miteinander. Seit unserem ersten gemeinsamen Besuch der GamesCom 2018, ist dieses Gildentreffen im Sommer, genauso wie unser Weihnachtsmarkt-Raid im Winter, feste Rituale geworden. 
				</p>
				{/* <SRLWrapper options={options}> 
					<a href="#" className={aboutStyles.aboutImage} target="_blank" rel="noreferrer" data-attribute="SRL" style={bgimage}></a>
				</SRLWrapper> */}
			</div>			
		</div>
	</Layout>
	)
}

export default AboutPage