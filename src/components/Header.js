import React from "react";
import Nav from "./Nav";
import HeaderImg from "../assets/png/banner.png";
import HeaderImg2 from "../assets/png/banner-mobile.png";

const Header = () => {
	return (
		<header className="h-screen">
			<section className="h-4/5 lg:h-4/6">
				<div class="relative w-full h-full">
					<picture>
						<source media="(min-width: 1024px)" srcSet={HeaderImg} />
						<img
							src={HeaderImg2}
							alt="band"
							className="absolute inset-0 w-full h-full object-cover"
						/>
					</picture>
				</div>
			</section>
			<Nav />
		</header>
	);
};

export default Header;
