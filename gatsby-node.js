const { create } = require("domain")
const { Link } = require("gatsby")


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

module.exports.createPages = async ({ graphql, actions }) => {
    const {createPage} = actions
    //Get Path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    //Get Markdown Data
    const res = await graphql(`
        query {
            allMarkdownRemark {
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

}

