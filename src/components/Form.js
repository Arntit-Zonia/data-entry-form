import React from "react";
import { Field, reduxForm } from "redux-form";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const Form = () => {
	const renderForm = ({ input, label, type }) => {
		return (
			<div className="accordion" id="accordionExample">
				<StepOne />
				<StepTwo />
				<StepThree />
			</div>
		);
	};

	return (
		<form className="container">
			<Field
				name="FirstName"
				type="text"
				label="First Name"
				component={renderForm}
			/>
			{/* <Field
				name="LastName"
				type="text"
				label="Last Name"
				component={renderForm}
			/>
			<br />
			<Field
				name="Email"
				type="email"
				label="Email Address:"
				component={renderForm}
			/> */}
		</form>
	);
};

export default reduxForm({ form: "Details" })(Form);
