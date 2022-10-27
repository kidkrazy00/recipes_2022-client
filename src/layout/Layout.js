import * as React from 'react'

//components
import Header from '../components/Header'

const Layout = ({ sitTitle, pageClass, pageTitle, children, userInteractions, isAuthenticated }) => {

  return (
    <>
      <Header siteTitle={sitTitle} isAuthenticated={isAuthenticated} />
      <main>
        <article className={pageClass}>
          <h1>
            {pageTitle}
            {userInteractions}
          </h1>
          {children}
        </article>
      </main>
    </>
  )
}

export default Layout