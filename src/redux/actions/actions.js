
import { createActions } from 'redux-actions';

// Action creators

const actionsUser = createActions(
	{
		USER_LOGOUT: val => val,
		USER_LOGIN: user => ({
			user: {
				username: user.username,
				fullname: user.fullname
			}
		})
	}
);

const actionsFilterRooms = createActions({
	FETCH_ROOMS: val => val,
	FETCH_ROOMS_SUCCESS: rooms => ({
		rooms
	}),
	FETCH_ROOMS_FAILURE: errorMessage => ({
		errorMessage
	}),
	APPLY_FILTER: filter => ({
		filter
	})
});


export { actionsUser, actionsFilterRooms };
