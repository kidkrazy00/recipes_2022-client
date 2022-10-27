import * as React from "react"
import LayoutBare from "../layout/LayoutBare"
import Nag from "../components/Nag"

// markup
const NotFoundPage = () => {
  return (
    <LayoutBare pageClass="oops">
      <Nag className="nag" />
    </LayoutBare>
  )
}

export default NotFoundPage
