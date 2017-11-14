import { combineReducers } from "redux";
import recipesReducers from "./recipesReducers";
import recipeReducer from "./recipeReducer";

export default combineReducers({
	recipes: recipesReducers,
	currentRecipe:recipeReducer
});