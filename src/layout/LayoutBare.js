import * as React from 'react'

const LayoutBare = ({ pageClass, children }) => {

  return (
    <>
      <main>
        <article className={pageClass}>
          {children}
        </article>
      </main>
    </>
  )
}

export default LayoutBare