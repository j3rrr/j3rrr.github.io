import React from 'react'
import {Link, graphql} from 'gatsby'
//import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'
import Image from '../components/Image'

import blogStyles from './blog.module.scss'

export default function Blog ({data}) {
        //console.log(data)
        return (
            <Layout><>          
                <Head title={data.markdownRemark.frontmatter.title} />
                <div className={blogStyles.singlePostWrapper}>
                    <div  className={blogStyles.postContent}>
                        
                        <h1>{data.markdownRemark.frontmatter.title}</h1>
                        <h5>{data.markdownRemark.excerpt}</h5>

                        {data.markdownRemark.frontmatter.screenshot && 
                        //TODO Link zum Bild !!!
                            // <Link to={data.markdownRemark.frontmatter.screenshot.childImageSharp.original.src}>
                            <Link to={data.markdownRemark.frontmatter.screenshot.relativePath}>
                                <Image
                                    src={data.markdownRemark.frontmatter.screenshot.relativePath}     
                                    className={blogStyles.screenshot}                                   
                                />  
                            </Link>                                  
                        }
                        {/* <div className={blogStyles.mdContent} dangerouslySetInnerHTML={{__html: this.props.data.markdownRemark.html}}></div> */}
                    </div>                           
                </div>
            </></Layout>
        )
    }


export const blogQuery = graphql`
    query (
        $slug: String!
        ) {
            markdownRemark (
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
