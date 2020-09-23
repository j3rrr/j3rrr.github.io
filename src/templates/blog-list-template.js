import React from "react"
import {Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Head from '../components/head'
//import indexStyles from '../pages/index.module.scss'
import blogListStyles from './blog-list-template.module.scss'


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
                        return (
                            <div className={blogListStyles.cards}>
                                <Link to={`/blog/${node.fields.slug}`}>
                                {node.frontmatter.screenshot && <Img sizes={node.frontmatter.screenshot.childImageSharp.sizes} />}                                
                                <div className={blogListStyles.title}>{node.frontmatter.title}</div> 
                                <div className={blogListStyles.subtitle} dangerouslySetInnerHTML={{__html: node.excerpt}}></div>                               
                                </Link>
                            </div>
                        )
                    })}
                    
                </div>
                <div className={blogListStyles.pagination}>
                
                    {!isFirst && (
                        <Link className={`${blogListStyles.btn} ${blogListStyles.btnMove} ${blogListStyles.btnMove2}`} to={prevPage} rel="prev">
                            <span>Älter</span><span>←</span>
                        </Link>
                    )}
                    {!isLast && (
                        <Link className={`${blogListStyles.btn} ${blogListStyles.btnMove} ${blogListStyles.btnMove2}`} to={nextPage} rel="next">
                            <span>Neuer</span><span>→</span>
                        </Link>
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
                        screenshot 
                        {
                            childImageSharp {
                                sizes(maxWidth: 630) {
                                ...GatsbyImageSharpSizes
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