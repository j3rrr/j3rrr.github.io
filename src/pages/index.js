import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const Home = () => {
	const data = useStaticQuery(graphql`
        query {
			allMarkdownRemark {
				edges {
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
	  	}
	`)
	
    return (
		<Layout>
			<Head title="Home" />
			<h1>Blog</h1>
            <ol className={indexStyles.posts}>
				{data.allMarkdownRemark.edges.map((edge) => {
					return (
						<li className={indexStyles.post}>
							<Link to={`/blog/${edge.node.fields.slug}`}>
								<h2>{edge.node.frontmatter.title}</h2>
								<p>{edge.node.frontmatter.date}</p>
							</Link>
						</li>
					)
				})}
			</ol>
		</Layout>
	)    
	// return (
	// 	<Layout>
	// 		<Head title="Home" />

	// 		<div class="box">
	// 			<h1>Hello Zero!!!</h1>
	// 			<h2>Exercitation excepteur officia proident aliqua ullamco sunt duis commodo sint.</h2>
	// 			<p>Kontakt <Link to="/contact">hier</Link></p> 
	// 			<ul>
	// 				<li> test</li>
	// 			</ul>
	// 		</div>
			
			
	// 	</Layout>
	// )
}

export default Home