import React from "react";

const StepTwo = () => {
	return (
		<div className="card">
			<div className="card-header" id="headingTwo">
				<h2 className="mb-0">
					<button
						className="btn btn-link collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#collapseTwo"
						aria-expanded="false"
						aria-controls="collapseTwo"
					>
						Step 2: More Comments
					</button>
				</h2>
			</div>
			<div
				id="collapseTwo"
				className="collapse"
				aria-labelledby="headingTwo"
				data-parent="#accordionExample"
			>
				<div className="card-body">
					<label htmlFor="phoneNumber">Telephone number</label>
					<input type="tel" id="phoneNumber" />
					<select name="Gender" id="gender">
						<option value="Select Gender"> Select Gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
					<label htmlFor="date">Date of birth</label>
					<input type="date" id="date" />
					<button
						className="btn btn-info ml-5"
						type="button"
						data-toggle="collapse"
						data-target="#collapseThree" // opens next one
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default StepTwo;
