import {
	FETCH_RECIPES,
	FETCH_RECIPE,
	FETCH_ERROR,
	FILTER_RECIPES
} from "./types";
import axios from "axios";

export function fetchRecipes() {
	return async dispatch => {
		const response = await axios.get("/api/recipes");
		dispatch({ type: FETCH_RECIPES, payload: response.data });
	};
}

export function getRecipe(id) {
	return dispatch => {
		axios
			.get("/api/recipes/" + id)
			.then(response =>
				dispatch({ type: FETCH_RECIPE, payload: response.data })
			)
			.catch(error => dispatch({ type: FETCH_ERROR }));
	};
}

export function filterRecipes(term) {
	return async dispatch => {
		const response = await axios.get("/api/recipes");
		dispatch({ type: FETCH_RECIPES, payload: response.data });
		dispatch({ type: FILTER_RECIPES, payload: term.trim() })
	};

}