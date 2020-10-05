import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import Image from '../components/Image'
import Layout from "../components/layout"
import Head from "../components/head"
//import AniLink from "gatsby-plugin-transition-link/AniLink"
import galleryStyles from "./gallery.module.scss"
import { SRLWrapper } from "simple-react-lightbox"

export default class Gallery extends React.Component {
  render() {
    const options = {
      settings: {
        autoplaySpeed: 4000,

        lightboxTransitionSpeed: 0.6,
        lightboxTransitionTimingFunction: "linear",
        slideAnimationType: "fade",
        slideSpringValues: [300, 200],
        slideTransitionSpeed: 1,
        slideTransitionTimingFunction: "linear",
      },
      buttons: {
        iconColor: "rgba(211, 186, 134, 0.8)",
      },
      thumbnails: {
        showThumbnails: true,
        thumbnailsAlignment: "center",
        thumbnailsContainerBackgroundColor: "transparent",
        thumbnailsContainerPadding: "10px",
        thumbnailsGap: "5px",
        thumbnailsOpacity: 0.3,
        thumbnailsPosition: "bottom",
        thumbnailsSize: ["100px", "80px"],
      },
      progressBar: {
        backgroundColor: "#000000",
        fillColor: "#D3BA86",
        height: "3px",
        showProgressBar: true,
      },
      caption: {
        showCaption: false,
      },
    }

    const images = this.props.data.allFile.edges

    console.log(images.length)

    // const { currentGalPage, numGalPages } = this.props.pageContext
    // const isFirstGal = currentGalPage === 1
    // const isLastGal = currentGalPage === numGalPages
    // const prevGalPage = currentGalPage - 1 === 1 ? `/gallery/1` : `/gallery/${currentGalPage - 1}`
    // const nextGalPage = `/gallery/${currentGalPage + 1}`
    //var counter = 0

    return (
      <Layout>
        <Head title="Zero Life" />
        <SRLWrapper options={options}>
          <div className={galleryStyles.galContainer}>
            {/* <InfiniteScroll
                    dataLength={images.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                      <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                  > */}

            {images.map(({ node }) => {
              //counter = counter + 1
              // var cssclass = 'img'+counter;
              // var bgimage = {
              //   backgroundImage: `url(${node.childImageSharp.fluid.src})`,
              // }

              return (
                <a
                  href={node.childImageSharp.original.src}
                  data-attribute="SRL"
                  key={node.id}
                >
                  <Img fluid={node.childImageSharp.fluid} alt={node.name}></Img>
                </a>

                // <a href={node.childImageSharp.original.src} target="_blank"  rel="noreferrer" style={bgimage} className={galleryStyles[`${cssclass}`]}>
                // </a>
                //  <Img fluid={node.childImageSharp.fluid} />
              )
            })}

            {/* </InfiniteScroll> */}
          </div>
        </SRLWrapper>
      </Layout>
    )
  }
}

export const galleryQuery = graphql`
  query galleryQuery {
    allFile(
      limit: 1000
      sort: { fields: mtime, order: DESC }
      filter: { relativeDirectory: { eq: "images/gallery" } }
    ) {
      totalCount
      edges {
        node {
          relativeDirectory
          relativePath
          base
          name
          id
          childImageSharp {
            original {
              src
            }
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`

// export const galleryQuery = graphql`
//     query galleryQuery($skip: Int!, $limit: Int!){
//       allFile(
//         limit: $limit
//         skip: $skip
//         sort: {fields: mtime, order: DESC}
//         filter:{
//           relativeDirectory: {
//             eq: "images/gallery"
//           }
//         }
//       ){
//         totalCount
//         edges{
//           node{
//             relativeDirectory
//             relativePath
//             base
//             childImageSharp {
//                 original{src}
//                 fluid(maxWidth: 1920) {
//                 ...GatsbyImageSharpFluid
//                 }
//             }
//           }
//         }
//       }
//     }
// `

/* <div className={galleryStyles.gallerypagination}>                
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
                    </div>  */
