import React from 'react';
import './Banner.scss';
import PropTypes from 'prop-types';

function Banner({ title, subtitle, children }) {
	return (
		<div className="banner">
			<h1>{title}</h1>
			<div />
			<p>{subtitle}</p>
			{children}			
		</div>
	);
}

Banner.defaultProps = {
	children: <></>,
	subtitle: ''
};

Banner.propTypes = {

	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	children: PropTypes.node

};

export default Banner;
