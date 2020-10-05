import React from 'react'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
//import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'
import Image from '../components/Image'
import { SRLWrapper } from "simple-react-lightbox";
import blogStyles from './blog.module.scss'

const progressData = require('../data/progress.json')

export default function Blog ({data}) {

  const options = {
    settings: {
      autoplaySpeed: 4000,
      
      lightboxTransitionSpeed: 0.6,
      lightboxTransitionTimingFunction: 'linear',
      slideAnimationType: 'fade',
      slideSpringValues: [300, 200],
      slideTransitionSpeed: 1,
      slideTransitionTimingFunction: 'linear'
    },
    buttons: {
      iconColor: "rgba(211, 186, 134, 0.8)",
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: true,
      showFullscreenButton: true,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    thumbnails: {
      showThumbnails: false,
      thumbnailsAlignment: 'center',
      thumbnailsContainerBackgroundColor: 'transparent',
      thumbnailsContainerPadding: '10px',
      thumbnailsGap: '5px',
      thumbnailsOpacity: 0.3,
      thumbnailsPosition: 'bottom',
      thumbnailsSize: ['100px', '80px']
    },
    progressBar: {
      backgroundColor: '#000000',
      fillColor: '#D3BA86',
      height: '3px',
      showProgressBar: true
    },
    caption: {
      showCaption: false
    }
  };

  //difficulty aus frontmatter
  const diffic = data.postData.frontmatter.difficulty
  const raidslug = data.postData.frontmatter.raidslug
  const bossSlug = data.postData.fields.slug  
  const kills = progressData[raidslug][diffic]
  var dummy = false

  //const killsMapped = kills.map()
  function matchesSlug(boss) {
    if(boss === bossSlug){
      return true
    }
  }

  var thisRoster = []

  if(raidslug === "dummy"){
    dummy = true
  }

  if (raidslug !== "dummy") {
    var thisKill = kills.find(({boss}) => matchesSlug(boss) )
    thisRoster = thisKill.roster
  } 
  

    // console.log('(=============================)')
    // console.log(thisKill.roster)
    // console.log('(=============================)')

    // for(let i = 0; i < kills.length; ++i) {
    //     let kill = kills[i]
    //     console.log('(=============================)')
    //     console.log(kill[i])
    //     console.log('(=============================)')
    // };
   // const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};
    
   // FÜR SORTIERUNG
 // const collator = new Intl.Collator('en'); // or whatever language
    //console.log(data)
  return (
    <Layout><>          
      <Head title={data.postData.frontmatter.title} />
      <div className={blogStyles.singlePostWrapper}>
        <div  className={blogStyles.postContent}>

          <h1>{data.postData.frontmatter.title}</h1>
          <h5>{data.postData.frontmatter.progress}</h5>
          <SRLWrapper options={options}>
          {data.postData.frontmatter.screenshot && 
            <a href={data.postData.frontmatter.screenshot.childImageSharp.original.src} target="_blank" rel="noreferrer" data-attribute="SRL">
              <Image
                src={data.postData.frontmatter.screenshot.relativePath}     
                className={blogStyles.screenshot}                                   
              />  
            </a>                                  
          }
          </SRLWrapper>
          
          
          <div class="setupTable">
            {thisRoster.map(({ character }) => {
              const charName = character.name.split("-")[0];
              const charClass = character.class.slug.replace(/\s/g, '')
              return (                                    
                  <span key={character.name} class={charClass}>{charName}</span>                     
              )
            })}
            {/* Roster Sortierung */}
            {/* {              
              thisRoster.map(({character}) => {
                const [charName] = character.name.split('-')
                const [charClass] = character.class.name.replace(/\s+/g, '').toLowerCase()
                return {
                  name: character.name,
                  charName, 
                  charClass,
                  playerClass: character.class.name.replace(/\s+/g, '').toLowerCase()
                }
              })
              .sort((a,b) => collator.compare(a.name, b.name))
              .map(({playerClass, name, charName}) => (<span key={name} className={playerClass}>{charName}</span>))
            } */}
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: data.postData.html }}/>

        </div>    
        {/* <AniLink fade className={blogStyles.homeLink} to="/posts/1"><span className="icon-hearthstone"> </span></AniLink> */}
        {!dummy &&
          <AniLink fade className={blogStyles.homeLink} to={`/progress-${data.postData.frontmatter.raidslug}`}><span className="icon-hearthstone"> </span></AniLink>
        }
        {dummy && 
          <AniLink fade className={blogStyles.homeLink} to="/"><span className="icon-hearthstone"> </span></AniLink>
        }
      </div>
    </></Layout>
  )
}


export const blogQuery = graphql`
  query (
    $slug: String!
  ) {
    postData: markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      fields {
        slug
      }
      frontmatter{
        title
        date
        progress
        difficulty
        raidslug
        screenshot {
          base
          relativePath
          childImageSharp {
            original{src}
            fluid(maxWidth: 1980) {
              ...GatsbyImageSharpFluid
            }
          }
        } 
      }
      excerpt(format:PLAIN)
      html
    }
  }
`
