import * as React from 'react'

//components
import Header from '../components/Header'

const Layout = ({ pageClass, pageTitle, children, userInteractions }) => {

  return (
    <>
      <Header siteTitle="sitTitle" />
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