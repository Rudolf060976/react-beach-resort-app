
// Actions Types
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';
// const REGISTER_USER = 'REGISTER_USER';

// Action creators

const userLogin = function (user) {
	
	return {
		type: USER_LOGIN,
		payload: {
			user
		}
	};
};

const userLogout = function () {
	
	return {
		type: USER_LOGOUT		
	};
};
/* eslint-disable-next-line */
export { USER_LOGIN, USER_LOGOUT, userLogin, userLogout };
