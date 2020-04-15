import React from "react"
import SEO from "../components/seo"
import SignUpForm from "../components/SignUpForm"
import "./styles.css"

const IndexPage = () => (
  <main className="center">
    <SEO title="Technical Interview Guide" />
    <section className="banner">
      <h1 className="subtitle">The Ultimate Guide To</h1>
      <h1 className="title">The Technical Interview Process</h1>
      <p className="coming-soon">Coming soon</p>
    </section>
    <section className="dark-container">
      <h2 className="title">Topics</h2>
      <ul>
        <li>The interview process</li>
        <li>Detailed topics list</li>
        <li>Tips for nailing your coding challenges</li>
        <li>Resources for learning topics in-depth</li>
        <li>Processing rejections</li>
        <li>Negotiating an offer</li>
        <li>Study plans & checklists</li>
      </ul>
    </section>
    <section className="small">
      <h2 className="title">Get notified</h2>
      <SignUpForm />
    </section>
  </main>
)

export default IndexPage
