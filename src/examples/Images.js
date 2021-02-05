import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import img from "../images/image3.jpg"

//image size for fluid/ fixed is determined by the parent container

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fixed: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" alt="" />
      </article>
      <article className="single-image">
        <h3>fixed image/ blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images

/* 
import React from 'react'
import Layout from '../components/Layout'
import Image from '../example/Image'
import img from '../images/image1.jpg'

import {graphql, useStaticQuery} from 'gatsby' 
import Img from 'gatsby-image'


const getData= graphql`
{
  fixed: file(relativePath: {eq: "image1.jpg"}) {
    childImageSharp {
      fixed(width:400, height:500){
        src
      }
    }
  }
  fluid: file(relativePath: {eq: "image2.jpg"}) {
    childImageSharp {
      fluid {
        src
      }
    }
  }
}
`
 const images = () => {
   const data = useStaticQuery(getData)
   return(
     <section className = 'images'>
     <article className= "single-image">
     <h3>basic image </h3>
     </article>

       <article className= "single-image">
     <h3>fixed image </h3>
     </article>

       <article className= "single-image">
     <h3>fluid image </h3>
     </article>
     </section>
   )
 }

 export default images;


 #css 
 .images {
   text-align: center;
   text-transform: capitalize;
   width: 80vw;
   margin: 0 auto 10rem auto;
 }

 .single-image {
   border: 3px solid red; 
   padding: 1rem 0; 
 }


 @media screen and (min-width: 992px) {
   images {
     display: grid; 
     grid-template-columns: 1fr 1fr 1fr;
     column-gap: 1rem;
   }
 }
*/
