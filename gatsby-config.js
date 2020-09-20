/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'From Hero to Zero',
		guild: 'Zero',
		realm: 'Aegwynn EU'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/posts/img`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							quality: 100,
							linkImagesToOriginal: true
						}
					}
				]
			}
		}
	],
}
