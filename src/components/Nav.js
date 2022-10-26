import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import { useMediaQuery } from 'react-responsive'
import { Link, NavLink } from 'react-router-dom'
import Brand from './Brand'
import Button from './Button';

const Nav = ({ siteTitle }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNav = (e) => {
    setIsVisible(!isVisible);
  }


  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  let authenticated = [
    { name: "Contribute", destination: "contribute/" },
    { name: "Recipes", destination: "recipes/" },
  ]

  let inauthenticated = [
    { name: "About", destination: "about/" },
  ]

  const links = (isAuthenticated ? authenticated : inauthenticated)

  const navLinks = links.map((item, i) =>
    <li key={i}>
      <NavLink
        to={'/' + item.destination}
        className={({ isActive }) => isActive ? 'btn--active' : ''}
        onClick={(e) => toggleNav(e)}
      >
        {item.name}
      </NavLink>
    </li>
  )

  const LogIn = (
    <li>
      <Button
        cClass="btn__submit"
        buttonType='button'
        title="Login"
        name="Login"
        icon="true"
        click={() => loginWithRedirect({})}
      />
    </li>
  )

  const LogOut = (
    <li>
      <Button
        cClass="btn__logout"
        buttonType='button'
        title="Logout"
        name="Logout"
        icon="true"
        click={() => logoutWithRedirect()}
      />
    </li>
  )

  const Logo = (
    <Link
      to="/dashboard/"
      className='logo'
      name='Home'
      aria-label='Home'
      onClick={isVisible ? toggleNav : null}>
      <Brand type="color" />
      <span>{siteTitle}</span>
    </Link>
  );

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 601 })
    return isMobile ? children : null
  }

  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 602 })
    return isNotMobile ? children : null
  }

  return (
    <>
      <Default>
        {isAuthenticated ? Logo : ''}
        <nav className="nav">
          {navLinks}
          {isAuthenticated ? LogOut : LogIn}
        </nav>
      </Default>
      <Mobile>
        {isAuthenticated ? Logo : ''}
        <Button
          buttonType='button'
          cClass={isVisible ? "toggle toggle--close" : "toggle"}
          name={isVisible ? "navigation close" : "navigation open"}
          click={(e) => toggleNav(e)}
        />
        {isVisible ?
          <nav className="nav">{navLinks}
            {isAuthenticated ? LogOut : LogIn}
          </nav>
          : ''
        }
      </Mobile>
    </>
  )

}
export default Nav