import React from "react";
import Palette1 from "../../assets/png/palette-1.png";
import Palette2 from "../../assets/png/palette-2.png";

const Music = () => {
	return (
		<div>
			<div className="flex justify-between relative">
				<div className="">
					<img
						src={Palette1}
						className="sticky top-0 h-screen"
						alt=""
						srcset=""
					/>
				</div>
				<div className="w-screen py-12">
					<div className="max-w-3xl m-auto">
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
						<h1 className="text-blue-500 text-9xl">Music</h1>
					</div>
				</div>
				<div className="">
					<img
						src={Palette2}
						className="sticky top-0 h-screen"
						alt=""
						srcset=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Music;
