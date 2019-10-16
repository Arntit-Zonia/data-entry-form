import React from "react";

const StepOne = () => {
	return (
		<div className="card">
			<div className="card-header" id="stepOne">
				<button
					className="btn btn-link"
					type="button"
					data-toggle="collapse"
					data-target="#collapseOne"
				>
					Step 1: Your Details
				</button>
			</div>

			<div
				id="collapseOne"
				className="collapse show"
				data-parent="#accordionExample"
			>
				<div className="card-body">
					<label htmlFor="first">First Name</label>
					<input id="first" type="text" />
					<label htmlFor="last">Surname</label>
					<input id="last" type="text" />
					<label htmlFor="email">Email Address:</label>
					<input id="email" type="email" />
					<button
						className="btn btn-info ml-5"
						type="button"
						data-toggle="collapse"
						data-target="#collapseTwo" // opens next one
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default StepOne;
