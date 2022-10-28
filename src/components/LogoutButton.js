import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TagButton from "./TagButton"

const LogoutButton = () => {
  const { logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <TagButton
      buttonType="button"
      className="btn__submit"
      type="submit"
      title="Logout"
      name="Logout"
      value="Logout"
      icon="true"
      onClick={() => logoutWithRedirect()}
    />
  )
}

export default LogoutButton;