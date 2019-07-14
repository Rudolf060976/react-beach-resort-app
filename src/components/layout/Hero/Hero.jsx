/* eslint-disable */
import React from 'react';
import './Hero.scss';

function Hero({ children, hero }) {
	return (
		<header className={hero}>
			{children}
		</header>
	);
}

Hero.defaultProps = {
	hero: 'defaultHero'
}

export default Hero;
