import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeaturedRoomsList } from '../../redux/selectors';
import Title from '../Title/Title';
import Room from '../Room/Room';
import Loading from '../Loading/Loading';
import './FeaturedRooms.scss';


class FeaturedRooms extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: false
		};
	}

	render() {

		const rooms = this.props.getFeaturedRoomsList.map(room => {

			return <Room key={room.id} room={room} />;

		});

		return (
			<section className="featured-rooms">
				<Title title="featured rooms" />
				<div className="featured-rooms-center">
					{this.state.loading ? <Loading /> : rooms}	
				</div>
				
			</section>
		);
	}
}

const mapStatetoProps = state => {

	return {
		getFeaturedRoomsList: getFeaturedRoomsList(state)		
	};

};

export default connect(mapStatetoProps, null)(FeaturedRooms);
