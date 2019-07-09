
export const getIsAuthenticated = function (state) {

	return state.authenticated;

};

export const getOnlineUser = function (state) {

	return state.userOnline;
};

const convertRoomsList = function (roomlistobj) {

	// Receives a room list object and converts it to an Array

	const obj = roomlistobj;

	const idsArray = obj.allIDs;
	const rooms = obj.byId;
	const resArray = [];

	for (let i = 0; i < idsArray.length; i++) {

		resArray.push(rooms[idsArray[i]]);

	}

	return resArray;
	
};

export const getRoomsList = function (state) {

	// Returns Rooms List as an Array of Objects

	return convertRoomsList(state.entities.rooms);

};


export const getRoomsIdsList = function (state) {

	return state.entities.rooms.allIDs;

};


export const getRoombyId = function (state, id) {
	
	return state.entities.rooms.byId[id];

};

export const getRoomImages = function (state, imgArray) {

	const images = [];

	for (let i = 0; i < imgArray.length; i++) {

		images.push(state.entities.images.byId[imgArray[i]]);
	}

	return images;

};
