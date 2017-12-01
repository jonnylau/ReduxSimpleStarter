import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	console.log(action);
	switch(action.type) {
		case FETCH_WEATHER:
		//return state.push(action.payload.data);
		//NEVER MUTATE our state in a reducer
		//we return a new data
		
		//	return state.concat([action.payload.data]);  
		return [ action.payload.data, ...state]
	}
	return state;
}