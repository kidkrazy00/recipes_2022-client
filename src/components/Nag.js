import React from "react";
import LoginButton from './LoginButton';


const Nag = ({className}) => {

  return (
      <div className={className}>
        <h1> Oops!</h1>
        <p>You're not logged in. There's a lot being cooked up be sure check back soon.</p>
        <LoginButton />
      </div>
  )
}

export default Nag;