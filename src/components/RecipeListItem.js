import React from 'react';
import { Link } from 'react-router-dom';

export default (props)=>{
	const url="/recipes/"+props.id
	return(
		<Link to={url} className="list-group-item list-group-item-action flex-column align-items-start">
		    <div className="d-flex w-100 justify-content-between">
		      <h5 className="mb-1">{props.recipe.name}</h5>
		      <small className="text-muted">{props.recipe.cookingTime}</small>
		    </div>
		    <p className="mb-1">{props.recipe.ingredients.join(", ")}</p>
		    
		  </Link>
	)
}