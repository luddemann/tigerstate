import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<nav>
				<NavLink exact={true} to="/">
					music
				</NavLink>
				<NavLink to="/about">about</NavLink>
				<NavLink to="/gallery">gallery</NavLink>
				<NavLink to="/contact">contact</NavLink>
			</nav>
		</div>
	);
};

export default Nav;
