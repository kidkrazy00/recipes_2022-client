import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Layout from "../layout/Layout"
import Brand from '../components/Brand'
import Button from "../components/Button"

const Landing = () => {

  const { loginWithRedirect } = useAuth0();

  const LogIn = (
      <Button
        buttonType="button"
        cClass="btn__submit"
        type="submit"
        title="Log In"
        name="Log In"
        value="Log In"
        icon="true"
        click={() => loginWithRedirect({})}
      />
  )

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
        {LogIn}
      </form>
    </Layout>
  )
}

export default Landing