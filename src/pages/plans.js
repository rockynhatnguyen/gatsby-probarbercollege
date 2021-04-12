import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Plans from "../components/Plans"

const PricingPage = () => (
  <Layout>
    <SEO title="Plans | Educational Plans and Pricing" />
    <div className="max-w-7xl mx-auto">
      <Plans />
    </div>
  </Layout>
)

export default PricingPage
