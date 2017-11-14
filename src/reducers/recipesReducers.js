import { FETCH_RECIPES } from "../actions/types";

export default function(state = { list: [], currentRecipe: null }, action) {
	switch (action.type) {
		case FETCH_RECIPES:
			return { ...state, list: [...action.payload] };
		default:
			return state;
	}
}