import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/layout/Hero/Hero';
import Banner from '../../components/Banner/Banner';


function Rooms() {
	return (
		<Hero hero="roomsHero">
			<Banner title="our rooms" >
				<Link to="/">
					<button type="button" className="btn-primary">
						return home
					</button>
				</Link>
			</Banner>
		</Hero>
	);
}

export default Rooms;
