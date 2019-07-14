import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/layout/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import FeaturedRooms from '../../components/FeaturedRooms/FeaturedRooms';

function Home() {
	return (
		<>
			<Hero hero="defaultHero">
				<Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
					<Link to="/rooms">
						<button type="button" className="btn-primary">
							our rooms
						</button>
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms />
		</>
	);
}

export default Home;
