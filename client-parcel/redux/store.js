import { createStore, applyMiddleware } from 'https://cdn.skypack.dev/redux@4.1.1';  
import thunk from 'https://cdn.skypack.dev/redux-thunk@2.4.1';  
import userReducer from './reducers/userReducer.js'; 

const store = createStore(
    userReducer,
    applyMiddleware(thunk)
);

export default store;
