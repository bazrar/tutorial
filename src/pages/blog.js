import React from 'react'
import Layout from '../components/Layout'
import styles from '../components/blog.module.css'

//global css problem : naming problem
const blog = () => {
    return (
        <Layout>
            <div className= {styles.page}>

            <h1>this is our blog page !</h1>
            <p className= {styles.text}>Minim cupidatat esse amet magna proident ea labore est incididunt fugiat in. Fugiat occaecat Lorem culpa ullamco eiusmod consectetur proident est officia et non cupidatat ex. Exercitation adipisicing consequat amet ea ipsum laborum eu.
            Sint veniam nulla sint in tempor duis laborum voluptate. 
            Magna duis pariatur reprehenderit sunt ut. 
            Nisi ex velit nulla exercitation eiusmod. 
            aliquip non nulla excepteur consectetur elit commodo
            aliqua occaecat esse labore est deserunt officia.
         </p>

            </div>
        </Layout>
    )
}

export default blog
