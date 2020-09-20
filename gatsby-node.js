const { create } = require("domain")
const { Link } = require("gatsby")
const { paginate } = require("gatsby-awesome-pagination")


const path = require('path')

const { createFilePath } = require("gatsby-source-filesystem")

const path = require('path')

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
        
    paginate({
        createPage,
        items: res.data.allMarkdownRemark.edges.node,
        itemsPerPage: 2,
        pathPrefix: './pages',
        component: path.resolve(`.src/pages/index.js`),

    });
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

