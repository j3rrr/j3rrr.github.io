import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'
import Pager from '.components/pager'

const Home = ({ data, pageContext }) => {

	const articles = data.allMarkdownRemark.edges.nodes;

	return (
		<Layout>
			<Head title="Home" />
			<h1>Blog</h1>
			<ol className={indexStyles.posts}>
				{articles.map(article => (
					<li className={indexStyles.post}>
						<Link to={`/blog/${article.fields.slug}`}>
							<h2>{article.frontmatter.title}</h2>
							<p>{article.frontmatter.date}</p>
						</Link>
					</li>
				))}
			</ol>
			<Pager pageContext={pageContext} />
		</Layout>
	)

};

Home.propTypes = {
	data: PropTypes.object.isRequired,
	pageContext: PropTypes.object.isRequired,
};

export const query = graphql`
	query ($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			skip: $skip 
			limit: $limit 
		) edge {
			node {
				frontmatter {
					title
					date
				}
				fields {
					slug
				}
			}
		}
	}
`;

// const Home = () => {
// 	const data = useStaticQuery(graphql`
//         query {
// 			allMarkdownRemark {
// 				edges {
// 					node {
// 						frontmatter {
// 							title
// 							date
// 						}
// 						fields {
// 							slug
// 						}
// 					}
// 				}
// 			}
// 	  	}
// 	`)
	
//     return (
// 		<Layout>
// 			<Head title="Home" />
// 			<h1>Blog</h1>
//             <ol className={indexStyles.posts}>
// 				{data.allMarkdownRemark.edges.map((edge) => {
// 					return (
// 						<li className={indexStyles.post}>
// 							<Link to={`/blog/${edge.node.fields.slug}`}>
// 								<h2>{edge.node.frontmatter.title}</h2>
// 								<p>{edge.node.frontmatter.date}</p>
// 							</Link>
// 						</li>
// 					)
// 				})}
// 			</ol>
// 		</Layout>
// 	)    
	
// }
=======
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
//import indexStyles from './index.module.scss'

const Home = () => {
	return (
		<Layout>
			<Head title="Home" />
			<h1>Hello Zero!!!</h1>
			<h2>Exercitation excepteur officia proident aliqua ullamco sunt duis commodo sint.</h2>
			<p>Kontakt <Link to="/contact">hier</Link></p> 
			
		</Layout>
	)
}
>>>>>>> parent of eeefe45... backup  vor pagination

export default Home