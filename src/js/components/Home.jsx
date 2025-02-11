import React from "react";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";


const Home = () => {
	return (
		<div style={{ maxWidth: '80rem', margin: '0 auto' }}>
			<Jumbotron />
			<div className="row mt-4">
				<div className="col-md-3 mb-4"><Card /></div>
				<div className="col-md-3 mb-4"><Card /></div>
				<div className="col-md-3 mb-4"><Card /></div>
				<div className="col-md-3 mb-4"><Card /></div>
			</div>
		</div>
	);
};

export default Home;