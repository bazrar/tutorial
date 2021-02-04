import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import HeaderStatic from '../examples/HeaderStatic'
import {graphql} from 'gatsby'


const examples = ({data}) => {
   const {site: {info: {title, person: {name, age}}}} = data;
    return (
        <Layout>
       <h1>Hello from examples page</h1>
       <Header />
       <HeaderStatic />
       <h5>title: {title}</h5>
       <h5>name: {name}</h5>
       </Layout>
    )
}

export const data = graphql`
{
  site {
    info:siteMetadata {
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

`
export default examples
