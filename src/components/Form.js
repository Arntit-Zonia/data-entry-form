import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const Form = () => {
	return (
		<form className="container w-50 my-5">
			<div className="accordion" id="accordionExample">
				<StepOne />
				<StepTwo />
				<StepThree />
			</div>
		</form>
	);
};

export default Form;
