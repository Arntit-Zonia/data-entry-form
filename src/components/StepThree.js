import React from "react";

const StepThree = () => {
	return (
		<div className="card">
			<div className="card-header" id="headingThree">
				<h2 className="mb-0">
					<button
						className="btn btn-link collapsed"
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
				aria-labelledby="headingThree"
				data-parent="#accordionExample"
			>
				<div className="card-body">
					<label htmlFor="textarea">Comments</label>
					<textarea id="textarea" cols="60" rows="10"></textarea>
					<button
						className="btn btn-info ml-5"
						type="button"
						data-toggle="collapse"
						data-target="#collapseThree"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default StepThree;
