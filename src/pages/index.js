import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeBanner from "../components/HomeBanner"
import About from "../components/About"
import Courses from "../components/Courses"
import Features from "../components/Features"
import FeaturesReverse from "../components/FeaturesReverse"
import CallToAction from "../components/CallToAction"
import Questions from "../components/Questions"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="max-w-7xl mx-auto">
        <HomeBanner />
        <About />
        <Courses />
        <Features />
        <FeaturesReverse />
      </div>
      <CallToAction header="Enroll now to save your spot!" buttonText="Enroll Now" buttonUrl="/application" />
      <Questions />
    </Layout>
  )
}

export default IndexPage
