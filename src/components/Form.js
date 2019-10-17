import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const Form = () => {
	return (
		<form id="form" className="container my-5">
			<div className="accordion" id="accordion">
				<StepOne />
				<StepTwo />
				<StepThree />
			</div>
		</form>
	);
};

export default Form;
