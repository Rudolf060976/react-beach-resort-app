import { handleActions } from 'redux-actions';

import { actionsUser } from '../actions/actions';

import globalInitialState from '../initial-state';

const { users: initialState } = globalInitialState; 

const reducer = handleActions({
	[actionsUser.userLogout]: (state, action) => {
		return {
			authenticated: false,
			userOnLine: {}
		};
	},
	[actionsUser.userLogin]: (state, action) => {
		return {
			authenticated: true,
			userOnLine: {
				username: action.payload.user.username,
				fullname: action.payload.user.fullname
			}
		};
	}
}, initialState);

export default reducer;
