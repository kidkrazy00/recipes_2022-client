import * as React from 'react'
import { dbRecipeGet } from '../services/fetchRecipes'

//components
import Header from '../components/Header'

const LayoutRecipe = ({ pageClass, pageTitle, children }) => {
  return (
    <>
      <Header siteTitle="sitTitle" />
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