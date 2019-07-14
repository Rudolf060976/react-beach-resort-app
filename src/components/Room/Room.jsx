import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../assets/images/defaultBcg.jpg';
import './Room.scss';

function Room({ room }) {
	/* eslint-disable-next-line */
	const { name, slug, images, price } = room;
	
	return (
		<article className="room">
			<div className="img-container">
				<img src={room.images[0] || defaultImg} alt="single room" />
				<div className="price-top">
					<h6>{`$	${price}`}</h6>
					<p>per nigth</p>
				</div>
				<Link to={`/rooms/${slug}`}>
					<button type="button" className="btn-primary room-link">Features</button>
				</Link>
			</div>
			<p className="room-info">{name}</p>
		</article>
	);
}

export default Room;
