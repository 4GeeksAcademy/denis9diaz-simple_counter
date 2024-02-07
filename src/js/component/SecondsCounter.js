import React from "react";
import Clock from "./Clock";
import Digit from "./Digit";

const SecondsCounter = (props) => {
	return (
		<div className="totalCounter text-center container">
			<div><Clock /></div>
			<div><Digit digit={props.digitFive}/></div>
			<div><Digit digit={props.digitFour}/></div>
			<div><Digit digit={props.digitThree}/></div>
			<div><Digit digit={props.digitTwo}/></div>
			<div><Digit digit={props.digitOne}/></div>
		</div>
	);
};

export default SecondsCounter;
