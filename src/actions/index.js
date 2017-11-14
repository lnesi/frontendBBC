import {FETCH_RECIPES} from './types';
import axios from 'axios';


export function fetchRecipes(){

	return async (dispatch)=>{
		const response = await axios.get("/api/recipes");
		dispatch({type:FETCH_RECIPES,payload:response.data});
	}
}