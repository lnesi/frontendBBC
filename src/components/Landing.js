import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
	return (
		<div className="container">
			<h1>BBC Front End Test</h1>
			<Link to="/recipes" className="btn btn-primary">
				Go to Recipes
			</Link>
		</div>
	);
}