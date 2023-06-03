import { createStore } from 'redux';
import postReducer from './reducers/postReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(postReducer, composeWithDevTools());

export default store;
