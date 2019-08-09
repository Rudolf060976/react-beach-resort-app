import { actionsFilterRooms } from './actions';
import { fetchFilterRooms } from '../selectors';

const actionAsyncApplyFilter = filter => {

	return function (dispatch, getState) {
        console.log('FILTER: ', JSON.stringify(filter, null, 2));
		dispatch(actionsFilterRooms.applyFilter(filter));
		
		dispatch(actionsFilterRooms.fetchRooms());

		setTimeout(() => {
			
			fetchFilterRooms(getState(), filter).then(filteredRooms => {

				dispatch(actionsFilterRooms.fetchRoomsSuccess(filteredRooms));
				
			});

		}, 1000);

	};
};

export default actionAsyncApplyFilter;
