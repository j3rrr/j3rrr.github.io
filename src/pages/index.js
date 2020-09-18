import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/layout'

const Home = () => {
	return (
		<Layout>
			<h1>Hello Zero!!!</h1>
			<h2>Exercitation excepteur officia proident aliqua ullamco sunt duis commodo sint.</h2>
			<p>Kontakt <Link to="/contact">hier</Link></p>
		</Layout>
	)
}

export default Home