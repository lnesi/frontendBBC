import React from "react";
import { Link } from "react-router-dom";

export default () => {
	return (
		<nav
			className="navbar navbar-light bg-light"
			style={{ marginBottom: "15px" }}
		>
			<Link to="/" className="navbar-brand mb-0 h1">
				Frontend BBC
			</Link>
		</nav>
	);
};