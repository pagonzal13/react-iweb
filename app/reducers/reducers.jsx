import { combineReducers } from 'redux';
import visitaSelectReducer from './visitaSelectReducer.jsx';
import visitsReducer from './visitsReducer.jsx';

const GlobalState = combineReducers({
	visits: visitsReducer,
	visitaSelect: visitaSelectReducer,
});

export default GlobalState;