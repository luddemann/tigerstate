import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div className="h-1/5 lg:h-2/6">
			<nav className="grid grid-cols-4 h-full">
				<NavLink
					className="flex items-center justify-center bg-brand-blue text-brand-red text-xl sm:text-3xl lg:text-5xl font-extrabold tracking-tightest"
					exact={true}
					to="/"
				>
					music
				</NavLink>
				<NavLink
					className="flex items-center justify-center bg-brand-yellow text-brand-pink text-xl sm:text-3xl lg:text-5xl font-extrabold tracking-tightest"
					to="/about"
				>
					about
				</NavLink>
				<NavLink
					className="flex items-center justify-center bg-brand-pink text-brand-yellow text-xl sm:text-3xl lg:text-5xl font-extrabold tracking-tightest"
					to="/gallery"
				>
					gallery
				</NavLink>
				<NavLink
					className="flex items-center justify-center bg-brand-red text-brand-blue text-xl sm:text-3xl lg:text-5xl font-extrabold tracking-tightest"
					to="/contact"
				>
					contact
				</NavLink>
			</nav>
		</div>
	);
};

export default Nav;
