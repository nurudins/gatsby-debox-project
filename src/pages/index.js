import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Globals/HeroSection"
import Footer from "../components/Globals/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Footer/>
    </Layout>
)

export default IndexPage
