import * as React from 'react'

//components
import Header from '../components/Header'

const Layout = ({ token, pageClass, pageTitle, children, userInteractions }) => {

  return (
    <>
      <Header token={token} siteTitle="sitTitle" />
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