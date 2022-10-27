import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/Button"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      buttonType="button"
      cClass="btn__submit"
      type="submit"
      title="Login"
      name="Login"
      value="Login"
      icon="true"
      click={() => loginWithRedirect({})}
    />
  )
}

export default LoginButton;