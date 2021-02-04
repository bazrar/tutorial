import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import img from "../images/image1.jpg"

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    fixed: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          src
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
        <Image fixed={data.fixed.childImageSharp.fixed.src} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
      </article>
    </section>
  )
}

export default Images
