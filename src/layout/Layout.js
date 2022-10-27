import * as React from 'react'

//components
import Header from '../components/Header'

const Layout = ({ sitTitle, pageClass, pageTitle, children, userInteractions, isAuthenticated }) => {

  return (
    <>
      <Header siteTitle={sitTitle} isAuthenticated={isAuthenticated} />
      <main>
        <article className={pageClass}>
          <header>
            {pageTitle ? <h1>{pageTitle}</h1> : ''}
            {userInteractions ? userInteractions : ''}
          </header>
          {children}
        </article>
      </main>
    </>
  )
}

export default Layout