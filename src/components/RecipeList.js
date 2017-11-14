import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import RecipeListItem from "./RecipeListItem";

class RecipeList extends Component{
	constructor(props){
		super(props);
		this.state={searchTerm:''}
	}
	componentDidMount(){
		this.props.fetchRecipes();
	}
	
	onChangeHandler(e){
		this.setState({searchTerm:e.target.value});
		this.props.filterRecipes(e.target.value);
	}

	renderContent(){
		
		if(this.props.recipes.length==0){
			return (
				<div>Sorry, we currently have no recipes for you</div>
			)
		}
		return this.props.recipes.map(function(r,i){
			return (
				<RecipeListItem recipe={r} key={i} id={i}/>
				
			)
		})
		
	}

	render(){
		return(
			<div className="container">
				
				<div className="input-group" style={{marginBottom:"10px"}}>
			      <input type="text" value={this.state.searchTerm} onChange={this.onChangeHandler.bind(this)} className="form-control" placeholder="Search for recipe by ingredient..."/>
			      
    			</div>
    			
				<div className="list-group">
				  {this.renderContent()}
				</div>
			</div>
		)

	}
}
function mapStateToProps(state){
	return {recipes:state.recipes}
}
export default connect(mapStateToProps,actions)(RecipeList);