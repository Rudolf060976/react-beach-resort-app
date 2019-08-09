import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRoomBySlug } from '../../../redux/selectors';
import defaultImg from '../../../assets/images/defaultBcg.jpg';
import Banner from '../../../components/Banner/Banner';
import StyledHero from '../../../components/layout/StyledHero/StyledHero';
import './SingleRoom.scss';

class SingleRoom extends Component {

	constructor(props) {
		super(props);

		this.state = {
			slug: this.props.match.params.slug,
			defaultImg
		};
	}
		
	render() {
		const room = this.props.getRoomBySlug(this.state.slug);
		let response = null;
		if (!room) {
			response = <div className="error"><h3>no such room could be found</h3></div>;
		} else {

			const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
			const [mainImg, ...restImgs] = images;
			response = (
				<>
					<StyledHero backgroundImg={mainImg || defaultImg}>
						<Banner title={`${name} room`}>
							<Link to="/rooms">
								<button type="button" className="btn-primary">
									back to rooms
								</button>
							</Link>
						</Banner>
					</StyledHero>
					<section className="single-room">
						<div className="single-room-images">
							{restImgs.map(item => (
								<img key={item} src={item} alt={name} />
							))}	
						</div>	
					</section>
					<div className="single-room-info">
						<article className="desc">
							<h3>details</h3>
							<p>{description}</p>
						</article>
						<article className="info">
							<h3>info</h3>
							<h6>price : ${price}</h6>
							<h6>size: {size} SQFT</h6>
							<h6>Max Capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
							<h6>{pets ? 'Pets Allowed' : 'No Pets Allowed'}</h6>
							<h6>{breakfast && 'free breakfast included'}</h6>
						</article>
					</div>
					<section className="room-extras">
						<h6>extras</h6>
						<ul className="extras">
							{extras.map(item => (
								<li key={item}>- {item}</li>
							))}
						</ul>
					</section>
				</>
			);
			
		}
		return (
			<>
				{response}
			</>		
		);
	}
}

const mapStatetoProps = state => {

	return {
		getRoomBySlug: slug => getRoomBySlug(state, slug)
	};

};


export default connect(mapStatetoProps, null)(SingleRoom);
