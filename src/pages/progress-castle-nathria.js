import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from '../components/layout'
import Head from '../components/head'

import progressStyles from './progress.module.scss'

export default class NathriaProgress extends React.Component {
  render() {    
    const kills = this.props.data.allMarkdownRemark.edges
    var counter = 0

    function isEven(value){
      if (value%2 === 0){
        return true
      } else {
        return false
      }
    }

    function isMythic(difficulty){
      if (difficulty === 'mythic'){
        return true
      } else {
        return false
      }
    }

    return (
      <Layout>
        <Head title="'Castle Nathria"/>
        <ul className={progressStyles.timeline}>
          {kills.map(({ node }) => {
           var diff = node.frontmatter.difficulty
            counter = counter+1
            var diffclass = isMythic(diff) ? 'mythic' : 'heroic'
            var leftright = isEven(counter) ? 'directionR' : 'directionL'
            return(
              <li key={node.id}>
                <div className={progressStyles[`${leftright}`]}> 
                  <div className={progressStyles.flagWrapper}>
                    <span className={progressStyles.hexa}></span>
                    <span className={progressStyles.flag}>
                      <AniLink fade to={`/blog/${node.fields.slug}`}>
                        {isEven(counter) ?
                          <><span className={progressStyles[`${diffclass}`]}>{node.frontmatter.difficulty.substr(0,1).toUpperCase()}</span>{node.frontmatter.title}</>
                          :
                          <>{node.frontmatter.title}<span className={progressStyles[`${diffclass}`]}>{node.frontmatter.difficulty.substr(0,1).toUpperCase()}</span></>
                        }
                      </AniLink>
                    </span>
                    <span className={progressStyles.timeWrapper}><span className={progressStyles.time}>{node.frontmatter.date}</span></span>
                  </div>
                </div>
              </li>
            )
          })}          
        </ul>
      </Layout>
    )
  }
}

export const nathriaQuery = graphql`
    query nathriaQuery {
      allMarkdownRemark(
        filter:{
          frontmatter: {raidslug: {eq:"castle-nathria"}}
        }  
        sort: { 
          fields: [frontmatter___date], order: DESC 
        }
      ) {
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                raidslug
                title
                difficulty
                date(formatString: "DD. MMM YYYY", locale: "de")
              }
            }
        }
      }
    }
`
