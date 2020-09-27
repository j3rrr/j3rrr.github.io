/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Zero',
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
				path: `${__dirname}/src/`,
				ignore: ['**src/images/**']
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'postimages',
				path: `${__dirname}/src/posts/images/`
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-image',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				excerpt_separator: `<!-- end -->`,
				plugins: [
					'gatsby-remark-attr',
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							quality: 100,
							linkImagesToOriginal: true
						}
					},					
					{
						resolve: "gatsby-remark-attr",
						options: {
						  allowDangerousDOMEventHandlers: true
						},
					}
				]
			}
		},
		'gatsby-transformer-json',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`
			}
		},
		`gatsby-plugin-transition-link`,
		
		
	],
}
		// {
		// 	resolve: 'gatsby-transformer-remark',
		// 	options: {
		// 		excerpt_separator: `<!-- end -->`
		// 	}
		// },		
		
		// {
		// 	resolve: 'gatsby-transformer-remark',
		// 	options: {
		// 	  plugins: [
		// 		'gatsby-remark-attr'
		// 	  ],
		// 	},
		//   },
		//   {
		// 	resolve: 'gatsby-transformer-remark',
		// 	options: {
		// 	  plugins: [
		// 		{
		// 		  resolve: "gatsby-remark-attr",
		// 		  options: {
		// 			allowDangerousDOMEventHandlers: true
		// 		  },
		// 		},
		// 	  ],
		// 	},
		//   }
	
