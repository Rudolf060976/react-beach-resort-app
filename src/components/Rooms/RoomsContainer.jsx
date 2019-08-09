import React, { Component } from 'react';
import { connect } from 'react-redux';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { getFilteredRoomsArray, getAppliedRoomsFilter, getIsFiltering } from '../../redux/selectors';
import actionAsyncApplyFilter from '../../redux/actions/asyncActions';
import Loading from '../Loading/Loading';
import './RoomsContainer.scss';

class RoomsContainer extends Component {
	
	
	render() {
		
		const showRooms = (
			<>				
				<RoomsList rooms={this.props.getFilteredRoomsArray} />				
			</>
		);

		return (
			<div className="rooms-container">
				<RoomsFilter handleFilter={this.props.applyFilter} filter={this.props.getAppliedRoomsFilter} />
				{this.props.getIsFiltering ? <Loading /> : showRooms }	
			</div>
		);
	}
}

function mapStatetoProps(state) {
	
	return {
		getFilteredRoomsArray: getFilteredRoomsArray(state),
		getAppliedRoomsFilter: getAppliedRoomsFilter(state),
		getIsFiltering: getIsFiltering(state)
	};
}

function mapDispatchtoProps(dispatch) {
	return {
		applyFilter: filter => dispatch(actionAsyncApplyFilter(filter))
	};
}

export default connect(mapStatetoProps, mapDispatchtoProps)(RoomsContainer);
