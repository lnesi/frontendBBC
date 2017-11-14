import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/recipes" component={RecipeList} />
					<Route path="/recipes/:id" component={Recipe} />
				</div>
			</BrowserRouter>
		);
	}
}