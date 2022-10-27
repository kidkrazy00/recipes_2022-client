import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/Button"

const LogoutButton = () => {
  const { logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Button
      buttonType="button"
      cClass="btn__submit"
      type="submit"
      title="Logout"
      name="Logout"
      value="Logout"
      icon="true"
      click={() => logoutWithRedirect()}
    />
  )
}

export default LogoutButton;