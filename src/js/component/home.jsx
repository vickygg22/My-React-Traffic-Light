import React from "react";
import TrafficLight from "./trafficLight.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="mainDiv">
			<TrafficLight />
		</div>
	);
};

export default Home;
