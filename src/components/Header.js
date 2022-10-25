import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = ({ token, siteTitle }) => {
  const [header, setHeader] = useState('');
  const [trigger] = useState('10');

  // Run once on first render
  useEffect(() => {

    const handleScroll = () => {
      const scrollTop = window.innerHeight;
      const scrollCurrent = window.pageYOffset;

      if (Math.abs(scrollTop - scrollCurrent) > trigger) {
        setHeader('header--solid');
      }

      if (Math.abs(scrollCurrent <= trigger)) {
        setHeader('');
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [trigger]);

  return (
    <>
      <header className={token ? 'header header--solid' : 'header'}>
        <Nav siteTitle={siteTitle} token={token} />
      </header>
    </>
  )
}

export default Header