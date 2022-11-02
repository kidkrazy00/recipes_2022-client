import React from "react";
import { useNavigate } from "react-router-dom";
import TagButton from './TagButton';
import LoginButton from './LoginButton';


const Nag = ({ className, isAuthenticated }) => {
  const navigate = useNavigate();

  const messageAuth = (
    <>
      <h1> Oops!</h1>
      <p>Something went wrong let's try that again</p>
    </>
  );

  const message = (
    <>
      <h1> Oops!</h1>
      <p>You're not logged in. There's a lot being cooked up be sure check back soon.</p>
    </>
  );

  const Home = (
    <TagButton
      buttonType="button"
      className="btn__basic"
      type="submit"
      title="Dashboard"
      name="Dashboard"
      value="Dashboard"
      icon="true"
      onClick={() => navigate('/')}
    />
  )

  return (
    <div className={className}>
      {!isAuthenticated ? message : messageAuth}
      {!isAuthenticated ? <LoginButton /> : Home }
    </div>
  )
}

export default Nag;