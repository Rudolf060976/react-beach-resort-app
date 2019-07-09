/* eslint-disable-next-line  */
import { fromJS } from 'immutable';

/* eslint-disable-next-line  */
import { USER_LOGIN, USER_LOGOUT, userLogin, userLogout } from '../actions/actions';

import initialState from '../initial-state';

const reducer = function (state = initialState, action) {

	switch (action) {

	case USER_LOGIN:
	{
		const { user } = action.payload;

		const st = fromJS(state);

		return st.setIn(['authenticated'], true).setIn(['userOnline'], user).toJS();

	}
	case USER_LOGOUT:
	{
		const st = fromJS(state);

		return st.setIn(['authenticated'], false).toJS();

	}
	default:

		return state;

	}


};

export default reducer;
