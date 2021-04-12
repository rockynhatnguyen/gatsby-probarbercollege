import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Plans from "../components/Plans"
import BarberingCourse from "../components/Plans/BarberingCourse"
import CrossoverCourse from "../components/Plans/CrossoverCourse"
import RefresherCourse from "../components/Plans/RefresherCourse"
import InstructorCourse from "../components/Plans/InstructorCourse"

const PricingPage = () => (
  <Layout>
    <SEO title="Plans | Educational Plans and Pricing" />
    <Plans />
    <BarberingCourse />
    <CrossoverCourse />
    <RefresherCourse />
    <InstructorCourse />
  </Layout>
)

export default PricingPage
