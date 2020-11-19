import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div>Home</div>
    <Navbar />
    <h1>Hello</h1>
    <Link to='/404'>Click me</Link>
  </Layout>
)

export default IndexPage
