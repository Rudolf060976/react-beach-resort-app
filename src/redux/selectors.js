
import { createSelector } from 'reselect';

// **** USERS ******

export const getIsAuthenticated = state => {

	return state.users.authenticated;

};

export const getOnlineUser = state => {

	return state.users.userOnline;
};

// ***** END USERS ********


// ***** ENTITIES ********

const getEntitiesRooms = state => state.entities.rooms; 

const getRoomsArray = createSelector(
	getEntitiesRooms,
	entitiesRooms => {
		// Receives a room list object and converts it to an Array
		const obj = entitiesRooms;
		const idsArray = obj.allIDs;
		const rooms = obj.byId;
		const resArray = [];

		for (let i = 0; i < idsArray.length; i++) {

			resArray.push(rooms[idsArray[i]]);

		}

		return resArray;
	}
);

const getEntitiesImagesById = state => state.entities.images.byId;


const getImageURLbyId = (imagesObject, id) => imagesObject[id].url;


export const getRoomsList = createSelector(

	// Returns Rooms List as an Array of Objects

	getRoomsArray, getEntitiesImagesById,

	(roomsArray, images) => {

		const roomList = roomsArray.map(room => {

			const imgArrayUrl = room.images.map(id => {
	
				return getImageURLbyId(images, id);
	
			});
	
			return { ...room, images: imgArrayUrl };	
		});

		return roomList;

	});


export const getFeaturedRoomsList = createSelector(

	getRoomsList,
	roomsList => {
		const filteredRooms = roomsList.filter(room => room.featured === true);	
		return filteredRooms;
	}
);

const getRoomSlug = (state, slug) => slug;

export const getRoomBySlug = createSelector(

	getRoomsList, getRoomSlug,
	(rooms, slug) => {

		const room = rooms.find((item) => {

			return (item.slug === slug);
		});
	
		return room;
	}

);


// ****** END OF ENTITIES *******


// ****** FILTER ROOMS ********

export const getIsFiltering = state => state.filterRooms.isFiltering;

export const getAppliedRoomsFilter = state => state.filterRooms.filterApplied;

const getFilteredRooms = state => state.filterRooms.filteredRooms;

export const getFilteredRoomsArray = createSelector(
	getFilteredRooms,
	filteredRooms => {

		const { allIDs, byId } = filteredRooms;
		
		const roomsArray = [];

		for (let i = 0; i < allIDs.length; i++) {

			roomsArray.push(byId[allIDs[i]]);
		}

		return roomsArray;
	}
);


export const fetchFilterRooms = (state, filterApplied) => {

	return new Promise(resolve => {

		const rooms = getRoomsList(state);
		const { 
			roomType,
			guests,
			maxPrice,	
			minSize,
			maxSize,
			pets,
			breakfast		
		} = filterApplied;

		const filteredRooms = rooms.filter(room => (
			((roomType === 'all') ? true : (room.type === roomType))
			&& room.capacity >= guests
			&& room.price <= maxPrice
			&& room.size >= minSize
			&& room.size <= maxSize
			&& room.pets === pets
			&& room.breakfast === breakfast 
		)			
		);

		resolve(filteredRooms);

	});

};

// ***** END FILTER ROOMS
