import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Layout from "../layout/Layout"
import Brand from '../components/Brand'
import LoginButton from '../components/LoginButton';

const Landing = () => {

  let greetingMessage = (
    <small>
      {/* This site has been built to preserve and share family recipes. */}
      Please login to continue.
    </small>
  )

  return (
    <Layout
      pageClass="landing"
      pageTitle=""
    >
      <form method="post">
        <Brand type='color' />
        <fieldset>
          <legend> Family Recipies</legend>
          <LoginButton />
        </fieldset>
          {greetingMessage}
      </form>
    </Layout>
  )
}

export default Landing