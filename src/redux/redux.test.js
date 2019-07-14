import store from './store';
import { userLogin, userLogout } from './actions/actions';
import { getIsAuthenticated, getOnlineUser, getRoomsList, getRoombyId, getRoomImages, getFeaturedRoomsList } from './selectors';


describe('Testing User Authentication', () => {

	test('Should authenticate an User', (done) => {

		const username = 'rafaelurbinan@hotmail.com';
		const password = 'pelalo2018';
		const fullname = 'Rafael Urbina';	
		
		const unsubscribe = store.subscribe(() => {

			const st = store.getState();

			expect(getIsAuthenticated(st)).toBeTruthy();
			expect(getOnlineUser(st)).toMatchObject({ fullname: 'Rafael Urbina' });

			return done();
		});

		store.dispatch(userLogin(username, password, fullname));

		unsubscribe();
	});

	test('Should Logout and User', (done) => {

		const unsubscribe = store.subscribe(() => {

			const st = store.getState();

			expect(getIsAuthenticated(st)).toBeFalsy();
			expect(Object.keys(getOnlineUser(st)).length).toBe(0);

			done();

		});

		store.dispatch(userLogout());

		unsubscribe();
	});

});


describe('Testing rooms data', () => {
	
	test('Should return room List', () => {

		const st = store.getState();

		const roomList = getRoomsList(st);

		expect(roomList[3].slug).toBe('single-deluxe');
		expect(roomList.length).toBe(13);

		
	});

	test('Should return room object by Id', () => {

		const roomId = 4;

		const st = store.getState();

		const roomObj = getRoombyId(st, roomId);

		expect(roomObj.slug).toBe('single-deluxe');
		expect(roomObj.price).toBe(300);

	});

	test('Should return room Images objects Array', () => {

		const st = store.getState();

		const imgArray = st.entities.rooms.byId[4].images; // Room id=4 images Array

		const ImagesArray = getRoomImages(st, imgArray);

		expect(ImagesArray[0].id).toBe(8);
		expect(ImagesArray[1].id).toBe(2);


	});

	test('Should return 3 featured Room objects', () => {

		const st = store.getState();

		const resArray = getFeaturedRoomsList(st);

		expect(resArray.length).toBe(3);
		expect(resArray[0].id).toBe(8);
		expect(resArray[2].id).toBe(13);

	});

});
