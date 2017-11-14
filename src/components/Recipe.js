import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
class Recipe extends Component {
	componentDidMount(){
		this.props.getRecipe(this.props.match.params.id);
	}

	render() {
		if(!this.props.recipe){
			return(<div className="container">Sorry, this recipe doesn't exist or may have been removed</div>);
		}
		return (
			<div className="container">
		
				<div className="card mb-3">
				  <img className="card-img-top" src={this.props.recipe.imageUrl} alt={this.props.recipe.name}/>
				  <div className="card-body">
				    <h4 className="card-title">{this.props.recipe.name}</h4>
				    <p className="card-text"><small className="text-muted">{this.props.recipe.cookingTime}</small></p>
				    <div className="card-text">
				    	<ul>
				    		{this.props.recipe.ingredients.map((ing,i)=>{
				    			return <li key={i}>{ing}</li>
				    		})}
				    	</ul>
				    </div>
				    
				  </div>
				</div>
				<Link to="/recipes">&lt; Back to Recipes</Link>
			</div>
		);
	}
}
function mapStateToProps(state){
	return {recipe:state.currentRecipe};
}
export default connect(mapStateToProps,actions)(Recipe);