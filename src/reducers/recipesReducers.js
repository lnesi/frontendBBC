import { FETCH_RECIPES,FILTER_RECIPES } from "../actions/types";
import _ from 'lodash';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_RECIPES:
			return action.payload;
		case FILTER_RECIPES:
			const match=new RegExp(action.payload.toLowerCase()+".*");
			
			const newState=_.filter(state,(recipe)=>{
				const r=_.find(recipe.ingredients,(o)=>{return o.toLowerCase().match(match)});
				if(r) return true
				
			});

			return newState;
		default:
			return state;
	}
}