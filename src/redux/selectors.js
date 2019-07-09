
export const getIsAuthenticated = function (state) {

	return state.authenticated;

};

export const getOnlineUser = function (state) {

	return state.userOnline;
};

export const getRoomsList = function (state) {

	return state.entities.rooms;

};

export const getRoombyId = function (state, id) {

	const list = state.entities.rooms.allIDs;

	let idroom = 0;

	for (let i = 0; i < list.length; i++) {

		if (list[i] === id) {

			idroom = list[i];

		} 
	}

	return state.entities.rooms.byId[idroom];
};

export const getRoomImages = function (state, imgArray) {

	const images = [];

	for (let i = 0; i < imgArray.length; i++) {

		images.push(state.entities.images.byId[imgArray[i]]);
	}

	return images;

};
