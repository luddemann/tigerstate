import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Music from "./pages/Music/Music";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<main className="m-0 p-0">
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
