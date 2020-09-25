import React from "react"
import {graphql } from "gatsby"
import Img from 'gatsby-image'
// import Image from '../components/Image'
import Layout from "../components/layout"
import Head from '../components/head'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import galleryStyles from './gallery.module.scss'


export default class Gallery extends React.Component {
    render() {
      
        const images = this.props.data.allFile.edges

        const { currentGalPage, numGalPages } = this.props.pageContext
        const isFirstGal = currentGalPage === 1
        const isLastGal = currentGalPage === numGalPages
        const prevGalPage = currentGalPage - 1 === 1 ? `/gallery/1` : `/gallery/${currentGalPage - 1}` 
        const nextGalPage = `/gallery/${currentGalPage + 1}` 


        return (
            <Layout>
                <Head title="Zero Life" />

                <div className={galleryStyles.galContainer}>

                  {images.map(({ node }) => {

                    return (
                      <a href={node.childImageSharp.original.src} target="_blank"  rel="noreferrer">
                        <Img fluid={node.childImageSharp.fluid} />
                      </a>
                    )
                    })}
                
                    <div className={galleryStyles.gallerypagination}>                
                        {!isFirstGal && (
                            <AniLink
                                fade
                                className={`${galleryStyles.gallerybtn} ${galleryStyles.gallerybtnMove} ${galleryStyles.gallerybtnMove2}`}
                                to={prevGalPage}
                                rel="prev"
                            >
                                <span>Zurück</span><span>←</span>
                            </AniLink >
                        )}
                        {!isLastGal && (
                            <AniLink
                                fade
                                className={`${galleryStyles.gallerybtn} ${galleryStyles.gallerybtnMove} ${galleryStyles.gallerybtnMove2}`}
                                to={nextGalPage}
                                rel="next"
                            >
                                <span>Weiter</span><span>→</span>
                            </AniLink >
                        )}
                    </div> 
                    </div>
                                
              </Layout>
      )
    }
}

export const galleryQuery = graphql`
    query galleryQuery($skip: Int!, $limit: Int!){
      allFile(
        limit: $limit
        skip: $skip
        filter:{
          relativeDirectory: {
            eq: "images/gallery"
          }     
        }
      ){
        totalCount
        edges{
          node{
            relativeDirectory
            relativePath
            base
            childImageSharp {
                original{src}
                fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
                }
            }
          }
        }
      }
    }
`