import React from "react"
import { Link } from "react-router-dom"

// layout
import Layout from '../layout/Layout'

const Dashboard = ({user}) => {
  return (
    <Layout
      pageClass="dashboard"
      pageTitle="Dashboard"
      user={user}
    >
      <p>
        Thanks for logging in {user.nickname}, there's more recipes and features on it's way so be sure to check back often.
      </p>
      <p>
        Check out some <Link to="/recipes/">recipes</Link>.
      </p>
      <p>Got a recipe you want to share? <Link to="/contribute/">Contribute</Link> a recipe by filling out requested info.</p>
      <p>Please know that submitted recipes held for validation and may not appear immediately.</p>
    </Layout>
  )
}

export default Dashboard