import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import entities from './reducers/entities';
import users from './reducers/users';
import filterRooms from './reducers/filterRooms';


const rootReducer = combineReducers({
	entities,
	users,
	filterRooms
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
