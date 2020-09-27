import React from "react"
import {graphql } from "gatsby"
// import Img from 'gatsby-image'
import Image from '../components/Image'
import Layout from "../components/layout"
import Head from '../components/head'
import AniLink from "gatsby-plugin-transition-link/AniLink"
//import indexStyles from '../pages/index.module.scss'
import blogListStyles from './blog-list-template.module.scss'
import { BsCardImage } from 'react-icons/bs';
import { BiDetail } from 'react-icons/bi';


export default class BlogList extends React.Component {
    render() {
        
        const posts = this.props.data.allMarkdownRemark.edges

        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? `/posts/1` : `/posts/${currentPage - 1}` 
        const nextPage = `/posts/${currentPage + 1}` 

        return (
            <Layout>
                <Head title="Archiv" />
                <div className={blogListStyles.cardContainer}>
                    
                    {posts.map(({ node }) => {
                        // const title = node.frontmatter.title || node.fields.slug
                        // return (
                        //     <div className={blogListStyles.cards}>
                        //         <Link to={`/blog/${node.fields.slug}`}>
                        //         {node.frontmatter.screenshot && <Img sizes={node.frontmatter.screenshot.childImageSharp.fluid} />}                                
                        //         <div className={blogListStyles.title}>{node.frontmatter.title}</div> 
                        //         <div className={blogListStyles.subtitle} dangerouslySetInnerHTML={{__html: node.excerpt}}></div>                               
                        //         </Link>
                        //     </div>
                        // )
                
                        return (
                            
                            <div className={blogListStyles.cards}>
                            <figure className={blogListStyles.evocImg}>  
                                {node.frontmatter.screenshot && 
                                    <Image
                                        src={node.frontmatter.screenshot.relativePath}
                                        className={blogListStyles.zoom}
                                    />                                    
                                } 
                                <figcaption>
                                    <div className={`${blogListStyles.overlay} ${blogListStyles.icons}`}>
                                        <a className={blogListStyles.icon} href={node.frontmatter.screenshot.childImageSharp.original.src} target="_blank" rel="noreferrer">                                       
                                            <BsCardImage />                                        
                                        </a>
                                        <AniLink fade className={blogListStyles.icon} to={`/blog/${node.fields.slug}`}>
                                            <BiDetail />
                                        </AniLink>
                                    </div>
                                    <div className={blogListStyles.figText}>
                                        <h3>{node.frontmatter.title}</h3>
                                        {/* <span className={blogListStyles.titleAdd}>{node.frontmatter.date}</span> */}
                                        <p>{node.frontmatter.progress}</p>
                                    </div>
                                </figcaption>
                            </figure>
                            
                            </div>
                        )
                    })}
                    </div>
                    <div className={blogListStyles.pagination}>
                
                        {!isFirst && (
                            <AniLink
                                fade
                                className={`${blogListStyles.btn} ${blogListStyles.btnMove} ${blogListStyles.btnMove2}`}
                                to={prevPage}
                                rel="prev"
                            >
                                <span>Neuer</span><span>←</span>
                            </AniLink >
                        )}
                        {!isLast && (
                            <AniLink
                                fade
                                className={`${blogListStyles.btn} ${blogListStyles.btnMove} ${blogListStyles.btnMove2}`}
                                to={nextPage}
                                rel="next"
                            >
                                <span>Älter</span><span>→</span>
                            </AniLink >
                        )}
                    </div>               
            </Layout>
        )
    }
}

export const blogListQuery = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "DD.MM.YYYY")
                        progress
                        screenshot 
                        {   
                            relativePath
                            absolutePath                            
                            childImageSharp {
                                original{src}
                                fluid(maxWidth: 630) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        }                        
                    }
                    excerpt(format:PLAIN)
                }
            }
        }
    }
`