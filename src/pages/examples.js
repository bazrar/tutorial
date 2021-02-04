import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import HeaderStatic from '../examples/HeaderStatic'

const examples = () => {
    return (
        <Layout>
       <h1>Hello from examples page</h1>
       <Header />
       <HeaderStatic />
       </Layout>
    )
}

export default examples
