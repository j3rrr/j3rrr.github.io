import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'
import indexStyles from '../pages/index.module.scss'


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
                <Head title="Home" />
                <h1>Blog</h1>
                <ol className={indexStyles.posts}>
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                        <li className={indexStyles.post}>
                            <Link to={`/blog/${node.fields.slug}`}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>{node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
                </ol>
                {!isFirst && (
                    <Link to={prevPage} rel="prev">
                        ← Previous Page
                    </Link>
                )}
                {!isLast && (
                    <Link to={nextPage} rel="next">
                        Next Page →
                    </Link>
                )}
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
                    }
                }
            }
        }
    }
`