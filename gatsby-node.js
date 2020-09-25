const { create } = require("domain")
const { Link, Reporter } = require("gatsby")


const path = require('path')

const { createFilePath } = require("gatsby-source-filesystem")


module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }    
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const {createPage} = actions
    
    //Get Path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    //Get Markdown Data
    const res = await graphql(`
        {
            allMarkdownRemark (
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
            ){
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (res.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }

    //Create New Pages    
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    // Create blog-list pages
    const posts = res.data.allMarkdownRemark.edges
    const postsPerPage = 4
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
        path: `/posts/${i + 1}`,
        component: path.resolve("./src/templates/blog-list-template.js"),
        context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
        },
        })
    })

};

