import React from "react";
import Spotify from "../assets/png/Spotify_Logo_RGB_Green.png";

import SpotifyLogo from '../assets/png/spotify.png';
import TidalLogo from '../assets/png/Tidal.png';
import SoundcloudLogo from '../assets/png/SoundCloud.png';


const Album = ({ spotifyUrl, img, bgColor, textColor }) => {
	return (
		<div className={`${bgColor} ${textColor} max-w-2xl h-full mx-auto shadow-2xl p-8`}>
			{/* <h3 className="text-2xl sm:text-5xl text-brand-yellow font-black tracking-tightest mb-8 ml-5">
				{albumTitle}
			</h3>
			<div className="grid grid-cols-3 items-center w-full h-full">
				<img
					src={img}
					alt="album cover"
					className="col-span-2 w-full h-full ml-5"
				/>
				<form action={url} target="_blank" className="-ml-10 relative">
					<div className="flex items-center gap-2 transform rotate-12 absolute right-0 -top-7 animate-pulse">
						<p className="text-brand-yellow font-black tracking-tighter">
							play on
						</p>
						<img src={Spotify} alt="" className="w-20" />
					</div>
					<button className="rounded-full bg-brand-yellow  bg-opacity-50 p-12 sm:p-16 shadow-2xl hover:bg-opacity-30 transition">
						<svg
							className="w-8 h-8 sm:w-16 sm:h-16 stroke-current text-brand-yellow"
							viewBox="0 0 36 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M32.0874 15.685L11.1727 2.07354C10.1866 1.43144 9.04021 1.06292 7.85609 1.00737C6.67197 0.951812 5.49463 1.21131 4.44992 1.75813C3.40521 2.30495 2.53239 3.11853 1.92474 4.11192C1.3171 5.10532 0.997465 6.24118 1.00002 7.3981V34.6147C0.999838 35.7705 1.32119 36.9047 1.92979 37.8963C2.53839 38.8879 3.41141 39.6996 4.4557 40.2449C5.49999 40.7902 6.67638 41.0486 7.85936 40.9925C9.04233 40.9364 10.1875 40.568 11.1727 39.9265L32.0874 26.315C32.9833 25.732 33.718 24.9421 34.2261 24.0155C34.7342 23.0888 35 22.0541 35 21.0032C35 19.9523 34.7342 18.9176 34.2261 17.9909C33.718 17.0643 32.9833 16.2744 32.0874 15.6914V15.685Z"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</form>
			</div>
			<div className="flex justify-end">
				<p className="text-brand-yellow font-medium text-sm md:text-lg tracking-tighter w-8/12 leading-snug mt-8 mr-5">
					tigerstate's 2nd ep, recorded at arctic saga studios in nordstrand,
					oslo.
				</p>
			</div>
			<div className="text-xs flex flex-row items-center justify-between mt-8 tracking-tighter font-semibold text-brand-yellow underline">
				<a href="">apple music</a>
				<a href="">tidal</a>
				<a href="">youtube</a>
				<a href="">soundcloud</a>
			</div> */}
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
