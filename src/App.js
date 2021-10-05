import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Music from "./pages/Music/Music";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Palette1 from "./assets/png/palette-1.png";
import Palette2 from "./assets/png/palette-2.png";

const App = () => {
	return (
		<Router>
			<Header />
			<div className="relative">
				<div className="">
					<img
						src={Palette1}
						className="sticky top-0 bottom-0"
						alt=""
						srcset=""
					/>
					<img
						src={Palette2}
						className="sticky top-0 bottom-0"
						alt=""
						srcset=""
					/>
				</div>
			</div>
			<Switch>
				<main>
					<Route exact path="/" component={Music} />
					<Route exact path="/about" component={About} />
					<Route exact path="/gallery" component={Gallery} />
					<Route exact path="/contact" component={Contact} />
				</main>
			</Switch>
		</Router>
	);
};

export default App;
