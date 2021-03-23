import React from "react";
import "./Report.css";

const Report = () => {
	return (
		<div className="report-main">
			<h4>Daily Monitoring</h4>
			<div className="card-container">
				<div className="card">
				<i className="fas fa-apple-alt fa-2x circle-icon"></i>
				<div className="flex">
				<span>Calories</span>
                <span className="text-dark">2814</span>
                <span className="text-muted">DAILY AVERAGE</span>
				</div>
				</div>
				
				<div className="card">
				<i className="fas fa-shoe-prints fa-2x circle-icon"></i>
				<div className="flex">
				<span>Steps</span>
                <span className="text-dark">7234</span>
                <span className="text-muted">DAILY AVERAGE</span>
				</div>
				</div>
				
				<div className="card">
				<i className="fas fa-dumbbell fa-2x circle-icon"></i>
				<div className="flex">
				<span>Workouts</span>
                <span className="text-dark">1h 23min</span>
                <span className="text-muted">ACTIVE</span>
				</div>
				</div>

				<div className="card">
				<i className="fas fa-moon fa-2x circle-icon" aria-hidden="true"></i>
				<div className="flex">
				<span>Sleeping Analysis</span>
                <span className="text-dark">7h 35min</span>
                <span className="text-muted">IN BAD AVERAGE</span>
				</div>
				</div>
			</div>
		</div>
	);
};

export default Report;
