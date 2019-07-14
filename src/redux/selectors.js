
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

const getImageURL = function (state, imgId) {

	const imgObj = state.entities.images.byId;

	return imgObj[imgId].url;
};

export const getRoomsList = function (state) {

	// Returns Rooms List as an Array of Objects

	const roomList = convertRoomsList(state.entities.rooms);


	const roomList2 = roomList.map((room) => {

		const imgArrayUrl = room.images.map(id => {

			return getImageURL(state, id);

		});

		return { ...room, images: imgArrayUrl };

	});

	return roomList2;

};

export const getFeaturedRoomsList = function (state) {

	// Return Rooms List with "features : true"

	const filteredRooms = getRoomsList(state).filter((room) => {

		return room.featured === true;

	});

	return filteredRooms;

};


export const getRoomsIdsList = function (state) {

	return state.entities.rooms.allIDs;

};


export const getRoombyId = function (state, id) {
	
	return state.entities.rooms.byId[id];

};
