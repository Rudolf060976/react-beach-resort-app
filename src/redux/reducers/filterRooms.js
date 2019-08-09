import { handleActions } from 'redux-actions';

import { actionsFilterRooms } from '../actions/actions';

import globalInitialState from '../initial-state';

const { filterRooms: initialState } = globalInitialState;


const reducer = handleActions({
	[actionsFilterRooms.fetchRooms]: (state, action) => {
		return {
			...state,
			isFiltering: true,
			error: false,
			errorMessage: '',
			filteredRooms: {
				allIDs: [],
				byId: {}
			}			
		};
	},
	[actionsFilterRooms.fetchRoomsSuccess]: (state, action) => {
		
		const { payload: { rooms } } = action;
		let allIDs = [];
		const byId = {};
		
		allIDs = rooms.map(item => item.id).sort((a, b) => a - b);
		
		for (let i = 0; i < rooms.length; i++) {

			byId[rooms[i].id] = rooms[i]; 

		}
		
		return {
			...state,
			isFiltering: false,
			error: false,
			errorMessage: '',			
			filteredRooms: {
				allIDs,
				byId
			}
		};

	},
	[actionsFilterRooms.fetchRoomsFailure]: (state, action) => {
		return {
			...state,
			isFiltering: false,
			error: true,
			errorMessage: action.payload.errorMessage,
			filteredRooms: {}
		};
	},
	[actionsFilterRooms.applyFilter]: (state, action) => {
		const {
			roomType,
			guests,
			maxPrice,
			minSize,
			maxSize,
			pets,
			breakfast
		} = action.payload.filter;

		return {
			...state,
			filterApplied: {
				roomType,
				guests,
				maxPrice,
				minSize,
				maxSize,
				pets,
				breakfast
			}
		};
	}
}, initialState);

export default reducer;
