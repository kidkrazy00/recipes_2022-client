import React from "react"
import { Link } from "react-router-dom"

// layout
import Layout from '../layout/Layout'

const Dashboard = ({token}) => {

  return (
    <Layout
      pageClass="dashboard"
      pageTitle="Dashboard"
      token={token}
    >
      <p>
        Thanks for logging in, there's more recipes and features on it's way so be sure to check back often.
      </p>
      <p>
        Check out some <Link to="/recipes/">recipes</Link>.
      </p>
      <p>Got a recipe you want to share? <Link to="/contribute/">Contribute</Link> a recipe by filling out requested info.</p>
      <p>Please know that recipes are not "auto generated" this is manual work.</p>
    </Layout>
  )
}

export default Dashboard