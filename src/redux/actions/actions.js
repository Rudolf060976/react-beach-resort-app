import uuidv4 from 'uuid/v4';
// Actions Types
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';
// const REGISTER_USER = 'REGISTER_USER';

// Action creators

const userLogin = function (username, password, fullname) {
	
	return {
		type: USER_LOGIN,
		payload: {
			user: {
				_id: uuidv4(),
				username,
				password,
				fullname
			}
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
