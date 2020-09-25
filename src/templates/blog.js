import React from 'react'
import {Link, graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
//import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'
import Image from '../components/Image'

import blogStyles from './blog.module.scss'

export default function Blog ({data}) {
        //console.log(data)
        return (
            <Layout><>          
                <Head title={data.postData.frontmatter.title} />
                <div className={blogStyles.singlePostWrapper}>
                    <div  className={blogStyles.postContent}>
                        
                        <h1>{data.postData.frontmatter.title}</h1>
                        <h5>{data.postData.excerpt}</h5>

                        {data.postData.frontmatter.screenshot && 
                        //TODO Link zum Bild !!!
                            // <Link to={data.markdownRemark.frontmatter.screenshot.childImageSharp.original.src}>
                            <Link to={data.postData.frontmatter.screenshot.relativePath}>
                                <Image
                                    src={data.postData.frontmatter.screenshot.relativePath}     
                                    className={blogStyles.screenshot}                                   
                                />  
                            </Link>                                  
                        }
                        <div className={blogStyles.mdContent} dangerouslySetInnerHTML={{__html: data.postData.html}}></div>
                          
                    </div>    
                    <AniLink fade className={blogStyles.homeLink} to="/posts/1"><span className="icon-hearthstone"> </span></AniLink>                     
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
                frontmatter{
                    title
                    date
                    screenshot {
                        base
                        relativePath
                        childImageSharp {
                            original{
                                src
                            }
                            fluid(maxWidth: 1980) {
                                ...GatsbyImageSharpFluid
                                }
                            }
                        } 
                    }
                excerpt(format:PLAIN)
                html
            }
        }`

// const Blog = (props) => {
//     return (
//         <Layout>
            // <Head title={props.data.markdownRemark.frontmatter.title} />
            // <div className={blogStyles.singlePostWrapper}>
            //     <div  className={blogStyles.postContent}>
                    
            //         <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                                      
            //         <div className={blogStyles.mdContent} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            //     </div>
                
                    
            // </div>
//         </Layout>
//     )
// }

// export default Blog
