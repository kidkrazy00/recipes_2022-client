import * as React from 'react'

//components
import Header from '../components/Header'

const LayoutRecipe = ({ sitTitle, pageClass, pageTitle, children, isAuthenticated }) => {

  return (
    <>
      <Header siteTitle={sitTitle} isAuthenticated={isAuthenticated} />
      <main>
        <article className={pageClass}>
          <h1>{pageTitle}</h1>
          {children}
        </article>
      </main>
    </>
  )
}

export default LayoutRecipe