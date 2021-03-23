import React from "react";
import "./Recommendation.css";

const Recommendation = () => {
	return (
		<div className="container">
			<div className="heading-container">
				<h3>Recommended Tips</h3>
				<a href="#seall">
					<div className="see-all">
						<i class="fa fa-chevron-left"></i>
						<i class="fa fa-chevron-right"></i>
					</div>
				</a>
			</div>
			<div className="monitor-main">
				<div className="card-1">
					<button>+</button>
					<div className="card-footer-1">
						<div className="icon-1">
							<i className="fas fa-running fa-2x circle-icon"></i>
						</div>
						<div className="content-1">
							<span>High-Intensity Training</span>
							<br />
							<span>Running in the nature.</span>
						</div>
					</div>
				</div>
				<div className="card-2">
					<button>+</button>
					<div className="card-footer-2">
						<div className="icon-2">
							<i className="fas fa-apple-alt fa-2x circle-icon"></i>
						</div>
						<div className="content-2">
							<span>Colourful evening meal!</span>
							<br />
							<span>Vegitable for better recovery</span>
						</div>
					</div>
				</div>
				<div className="card-3">
					<button>+</button>
					<div className="card-footer-3">
						<div className="icon-3">
							<i className="fas fa-heartbeat fa-2x circle-icon"></i>
						</div>
						<div className="content-3">
							<span>Meditate for 5 min</span>
							<br />
							<span>Train your mind.</span>
						</div>
					</div>
				</div>
				<div className="card-4">
					<button>+</button>
					<div className="card-footer-4">
						<div className="icon-4">
							<i className="fas fa-apple-alt fa-2x circle-icon"></i>
						</div>
						<div className="content-4">
							<span>Skin hydration</span>
							<br />
							<span>Drink spinach smoothie</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recommendation;
