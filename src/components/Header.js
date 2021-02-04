import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
const getData = graphql`
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
`;

const Header = () => {
    // console.log(getData)
    const {site: {siteMetadata: {title, person: {name}}}} = useStaticQuery(getData);
    // console.log(data)
    return (
        <div>
           {/* <h1>title : {data.site.siteMetadata.title}</h1>
           <h1>name : {data.site.siteMetadata.person.name }</h1> */}

           <p>title : {title}</p>
           <p>name : {name}</p>
        </div>
    )
}

export default Header
