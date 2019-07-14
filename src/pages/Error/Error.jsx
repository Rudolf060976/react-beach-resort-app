import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/layout/Hero/Hero';
import Banner from '../../components/Banner/Banner';

function Error() {
	
	return (
		<Hero>
			<Banner title="404" subtitle="page not found">
				<Link to="/">
					<button type="button" className="btn-primary">return home</button>
				</Link>
			</Banner>
		</Hero>
	);
}

export default Error;
