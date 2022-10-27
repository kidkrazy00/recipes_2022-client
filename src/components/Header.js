import React, { useState, useEffect } from 'react'
import Nav from './Nav'

const Header = ({ isAuthenticated, siteTitle }) => {
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
      <header className={isAuthenticated ? 'header header--solid' : 'header'}>
        <Nav siteTitle={siteTitle} />
      </header>
    </>
  )
}

export default Header