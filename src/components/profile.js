import React from "react"
import { getUser } from "../services/auth"
import Layout from "../layout/Layout"

const Profile = () => (
  <Layout
    pageClass="profile"
  >
    <ul>
      <li>Name: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
    </ul>
  </Layout>
)

export default Profile