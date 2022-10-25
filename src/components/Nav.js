import React, { useState, useEffect } from 'react'

import { useMediaQuery } from 'react-responsive'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Brand from './Brand'
import Button from './Button';

const Nav = ({ token, siteTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate(`/`);
    window.location.reload();
  }

  const toggleNav = (e) => {
    setIsVisible(!isVisible);
  }

  let authenticated = [
    { name: "Contribute", destination: "contribute/" },
    { name: "Recipes", destination: "recipes/" },
  ]

  let inauthenticated = [
    { name: "About", destination: "about/" },
    { name: "Login", destination: "" },
  ]

  const links = (token ? authenticated : inauthenticated)

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

  const LogOut = (
    <li>
      <Button
        cClass="btn__logout"
        buttonType='anchor'
        title="Logout"
        name="Logout"
        icon="true"
        click={(e) => handleLogout(e)}
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
        {token ? Logo : ''}
        <nav className="nav">
          {navLinks}
          {token ? LogOut : ''}
        </nav>
      </Default>
      <Mobile>
        {token ? Logo : ''}
        <Button
          buttonType='button'
          cClass={isVisible ? "toggle toggle--close" : "toggle"}
          name={isVisible ? "navigation close" : "navigation open"}
          click={(e) => toggleNav(e)}
        />
        {isVisible ?
          <nav className="nav">{navLinks}
            {token ? LogOut : ''}
          </nav>
          : ''
        }
      </Mobile>
    </>
  )

}
export default Nav