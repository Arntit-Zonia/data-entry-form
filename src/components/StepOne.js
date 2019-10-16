import React from "react";

const StepOne = () => {
	return (
		<div className="card">
			<div className="card-header bg-warning" id="stepOne">
				<button
					className="btn text-white"
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
					<div className="row">
						<div className="col">
							<label htmlFor="firstName">First Name</label>
							<br />
							<input
								id="firstName"
								className="form-control w-75"
								type="text"
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="surname">Surname</label>
							<br />
							<input
								id="surname"
								className="form-control w-75"
								type="text"
								required
							/>
						</div>
						<div className="col-6 mt-3">
							<label htmlFor="email">Email Address:</label>
							<br />
							<input
								id="email"
								className="form-control w-75"
								type="email"
								required
							/>
						</div>
					</div>
					<button
						className="next btn btn-info"
						type="button"
						data-toggle="collapse"
						data-target="#collapseTwo"
					>
						Next >
					</button>
				</div>
			</div>
		</div>
	);
};

export default StepOne;
