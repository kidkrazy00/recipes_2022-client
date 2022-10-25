import React from 'react';
import Social from '../components/Social.js';

const Footer = () => {
	const Copyright = () => (
		<ul className="copyright">
			<li>©2020 kidkrazy. All rights reserved.</li>
		</ul>
	);
      
	return (
		<footer>
	    	<Social />
	    	<Copyright />
	    </footer>
	);
}

export default Footer;