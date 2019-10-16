import React from "react";

const StepThree = () => {
	return (
		<div className="card">
			<div className="card-header bg-warning" id="headingThree">
				<h2 className="mb-0">
					<button
						className="btn collapsed text-white"
						type="button"
						data-toggle="collapse"
						data-target="#collapseThree"
					>
						Step 3: Final Comments
					</button>
				</h2>
			</div>
			<div
				id="collapseThree"
				className="collapse"
				data-parent="#accordionExample"
			>
				<div className="card-body">
					<label htmlFor="textarea">Comments</label>
					<br />
					<textarea
						id="textarea"
						className="form-control rounded w-75"
						rows="10"
					></textarea>
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

export default StepThree;
