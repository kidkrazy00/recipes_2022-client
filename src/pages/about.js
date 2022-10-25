import * as React from "react"
import { Link } from 'react-router-dom'
import Button from '../components/Button'

// layout
import Layout from '../layout/Layout'

const About = () => {
  let greetingMessage = (
      <>
        <p>
          This site has been built to preserve and share family recipes.
          If you wish to contribute <Link to="/">log in</Link> to view and submit a recipes.
        </p>
        <p>
          This website was handcrafted by kidkrazy, take a look at my personal site <Button buttonType="anchor" cClass="" title="kidkrazy.net" destination="https://kidkrazy.net" target="_blank" icon="true"/> for more creative work.
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