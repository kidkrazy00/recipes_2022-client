import * as React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
import Button from '../components/Button'

// layout
import Layout from '../layout/Layout'

const About = () => {
  const { loginWithRedirect } = useAuth0();

  let greetingMessage = (
    <>
      <p>
        This site has been built to preserve and share family recipes.
        If you wish to contribute <Button buttonType="anchor" click={() => loginWithRedirect({})} title="log in" /> to view and submit a recipes.
      </p>
      <p>
        This website was handcrafted by kidkrazy, take a look at my personal site <Button buttonType="anchor" cClass="" title="kidkrazy.net" destination="https://kidkrazy.net" target="_blank" /> for more creative work.
      </p>
      <p>
        Thanks for visiting.
      </p>
    </>
  )

  return (
    <Layout
      pageClass="about"
      pageTitle="About"
    >
      {greetingMessage}
    </Layout>
  )
}

export default About