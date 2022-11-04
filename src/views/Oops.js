import * as React from "react"
import LayoutBare from "../layout/LayoutBare"
import Nag from "../components/Nag"

// markup
const oops = ({ isAuthenticated, isLoading }) => {

  return (
    <LayoutBare pageClass="oops">
      {!isLoading 
      ? <Nag className="nag" isAuthenticated={isAuthenticated} />
      : ''}
    </LayoutBare>
  )
}

export default oops
