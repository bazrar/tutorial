import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          data
          description
          title
          person {
            age
            name
          }
        }
      }
    }
  `)
  return <div>
      <h1>{data.site.siteMetadata.person.name}</h1>
      <h1>{data.site.siteMetadata.person.age}</h1>
  </div>
}

export default ComponentName
