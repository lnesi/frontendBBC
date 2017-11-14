import { FETCH_RECIPES,FETCH_RECIPE,FETCH_ERROR } from '../actions/types';

export default function(state=null,action){
	switch(action.type){
		case FETCH_RECIPE:
			return action.payload;
		case FETCH_ERROR:
		case FETCH_RECIPES:
			return null;
		default:
			return state;
	}
}