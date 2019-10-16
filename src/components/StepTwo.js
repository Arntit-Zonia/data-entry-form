import React from "react";

const StepTwo = () => {
	return (
		<div className="card">
			<div className="card-header bg-warning" id="stepTwo">
				<h2 className="mb-0">
					<button
						className="btn collapsed text-white"
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
				data-parent="#accordionExample"
			>
				<div className="card-body">
					<div className="row">
						<div className="col-6">
							<label htmlFor="phoneNumber">
								Telephone number
							</label>
							<br />
							<input
								type="tel"
								id="phoneNumber"
								className="form-control w-75"
								required
							/>
						</div>
						<div className="col-6">
							<label htmlFor="gender">Gender</label>
							<br />
							<select
								name="Gender"
								id="gender"
								className="form-control w-50"
								required
							>
								<option value="Select Gender">
									Select Gender
								</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
						<div className="col-6 mt-3">
							<label htmlFor="date">Date of birth</label>
							<br />
							<input
								id="date"
								className="date form-control w-25 d-inline "
								placeholder="DD"
								maxLength="2"
								required
							/>
							<input
								className="date form-control w-25 d-inline mx-2"
								placeholder="MM"
								maxLength="2"
								required
							/>
							<input
								className="date form-control w-25 d-inline"
								placeholder="YYYY"
								maxLength="4"
								required
							/>
						</div>
					</div>

					<button
						className="next btn btn-info d-flex ml-auto"
						type="button"
						data-toggle="collapse"
						data-target="#collapseThree"
					>
						Next >
					</button>
				</div>
			</div>
		</div>
	);
};

export default StepTwo;
