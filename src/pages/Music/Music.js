import React from "react";
import Palette1 from "../../assets/png/palette-1.png";
import Palette2 from "../../assets/png/palette-2.png";
import Heartbeats from "../../assets/png/EPEPEP.png";
import Album from "../../components/Album";

const Music = () => {
	const links = {
		heartbeats: "https://google.com",
	};

	return (
		<div>
			<div className="flex justify-between relative bg-yellow-50">
				<div className="hidden sm:block">
					<img
						src={Palette1}
						className="sticky top-0 h-screen"
						alt=""
						srcset=""
					/>
				</div>
				<div className="w-screen p-5 mb-20">
					<div className="max-w-5xl mx-auto">
						<h1 className="text-brand-red text-6xl font-black tracking-tightest pb-16 pt-11 text-center">
							releases
						</h1>
						<div className="flex flex-col gap-12">
							<Album
								img={Heartbeats}
								url={links.heartbeats}
								albumTitle="heartbeats"
							/>
							<Album
								img={Heartbeats}
								url={links.heartbeats}
								albumTitle="heartbeats"
							/>
						</div>
					</div>
				</div>
				<div className="hidden sm:block">
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
