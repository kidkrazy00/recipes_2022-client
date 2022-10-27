import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Layout from "../layout/Layout"
import Brand from '../components/Brand'
import LoginButton from '../components/LoginButton';

const Landing = () => {

  let greetingMessage = (
    <>
      <p>
        This site has been built to preserve and share family recipes.
      </p>
    </>
  )

  return (
    <Layout
      pageClass="landing"
      pageTitle=""
    >
      <form method="post">
        <Brand type='color' />
        <fieldset>
          {/* <legend> Family Recipies</legend> */}
          {greetingMessage}
        </fieldset>
        <LoginButton />
      </form>
    </Layout>
  )
}

export default Landing