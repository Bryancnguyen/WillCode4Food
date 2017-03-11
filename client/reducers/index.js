import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import Tweets from './Tweets';

const rootReducer = combineReducers({posts, Tweets, routing: routerReducer });

export default rootReducer;
