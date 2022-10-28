import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TagButton from "../components/TagButton"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <TagButton
      buttonType="button"
      className="btn__submit"
      type="submit"
      title="Login"
      name="Login"
      value="Login"
      icon="true"
      onClick={() => loginWithRedirect({})}
    />
  )
}

export default LoginButton;