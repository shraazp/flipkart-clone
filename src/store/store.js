/**
* store holds the whole state tree of the application
@author:Shravya P
*/
import { createStore } from 'redux';
import reducers from '../reducer';

const store = createStore(reducers, {});

export default store;
