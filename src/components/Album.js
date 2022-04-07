import React from "react";

const Album = ({ spotifyUrl, img, bgColor, textColor, latest }) => {
	return (
		<div className={`${bgColor} ${textColor} max-w-2xl h-full mx-auto shadow-2xl p-8 relative`}>
			{latest && 
				<div className="absolute text-white text-2xl font-black tracking-tightest bg-gray-700 bg-opacity-60 p-4 shadow-2xl top-25 left-0">latest release</div>
			}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
				<img
					src={img}
					alt="album cover"
					className="w-full"
				/>
				<iframe className="" src={spotifyUrl} width="100%" height="100%" frame-border="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
			</div>
			
			<div className="text-sm flex flex-row items-center justify-between mt-8 tracking-tighter font-semibold underline">
				<a href="">apple music</a>
				<a href="">tidal</a>
				<a href="">youtube</a>
				<a href="">soundcloud</a>
			</div>
		</div>
	);
};

export default Album;
