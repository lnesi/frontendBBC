import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class RecipeList extends Component{
	componentDidMount(){
		this.props.fetchRecipes();
	}
	render(){
		return(
			<div className="container">
				<div className="list-group">
				  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
				    <div className="d-flex w-100 justify-content-between">
				      <h5 className="mb-1">List group item heading</h5>
				      <small className="text-muted">3 days ago</small>
				    </div>
				    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
				    <small className="text-muted">Donec id elit non mi porta.</small>
				  </a>
				</div>
			</div>
		)

	}
}
function mapStateToProps(state){
	return {recipes:state.recipes.list}
}
export default connect(mapStateToProps,actions)(RecipeList);