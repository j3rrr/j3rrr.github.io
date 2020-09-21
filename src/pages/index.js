import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const Home = () => {
	const data = useStaticQuery(graphql`
        query {
			allMarkdownRemark(
				
                sort: {fields: [frontmatter___date], order: DESC}
                limit: 1
            ) {
				edges {
					node {
						frontmatter {
							title
							date(formatString: "DD.MM.YYYY")
						}
						fields {
							slug
						}
						html
					}
				}
			}
	  	}
	`)
	
    return (
		<Layout>
			<Head title="Home" />
			<div class="mainWrapper">
				
					{data.allMarkdownRemark.edges.map((edge) => {
						return (
							<div className={indexStyles.post}>
								
									
								<button className={indexStyles.btnHover}>
									<Link to={`/blog/${edge.node.fields.slug}`}>
										{edge.node.frontmatter.title}
									</Link><br></br>
									<div className={indexStyles.desc} dangerouslySetInnerHTML={{__html: edge.node.html}}></div>
								</button>
									
								
									{/* <p>{edge.node.frontmatter.date}</p>
									<div dangerouslySetInnerHTML={{__html: edge.node.html}}></div> */}
								
								
							</div>
						)
					})}
			</div>
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