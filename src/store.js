import { createStore } from 'redux';
import rootReducer from './reducers'; // combine all reducers here

const store = createStore(
  rootReducer,
);

export default store;
