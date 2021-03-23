import React from "react";
import "./Challenge.css";

const Challenge = () => {
	return (
		<div className="main-container">
			<div className="challenge-container">
				<h3>Challenge</h3>
				<div className="challenge">
					<span>
						<i className="fas fa-apple-alt fa-2x circle-icon"></i>
						<h2>Early Morning Smoothie</h2>
					</span>
					<p>
						Start your day with energy. For breakfast, prepare a
						powerful and healthy smoothie rich in potassium and
						vitamin C. It will boost your metabolism.
					</p>
					<h4>RECEPIE:</h4>
					<div className="recepie">
						<div className="part-1">
							<ul>
								<li>130g banana</li>
								<li>1 whole kiwi</li>
								<li>250ml, orange juice</li>
								<li>3 spoons of yogurt</li>
							</ul>
						</div>
						<div className="part-2">
							<h1>420 cal</h1>
						</div>
					</div>
                    <div className="add-challenge">
                        <button>ADD CHALLENGE</button>
                        <a href="#challenge-friend">CHALLENGE FRIEND</a>
                    </div>
				</div>
			</div>
			<div className="challenge-container">
				<div className="heading-container">
					<h3>Daily Tips</h3>
					<a href="#seall">
						<div className="see-all">
							<span>See all </span>
							<i class="fa fa-chevron-right"></i>
						</div>
					</a>
				</div>

				<div className="daily-tips">
					<div>
						<h3>Mindfulness</h3>
						<p>
							Do one-hour yoga for improving your body balance,
							flexibility and strength.
						</p>
						<a href="#">
							<span>
								<i class="fa fa-chevron-right"></i>
								<span> Find out more</span>
							</span>
						</a>
						<hr />
					</div>

					<div>
						<h3>Get more of your day</h3>
						<p>
							Wake up 40 min before the usual and go for a morning
							walk in the park.
						</p>
						<a href="#">
							<span>
								<i class="fa fa-chevron-right"></i>
								<span> Find out more</span>
							</span>
						</a>
						<hr />
					</div>

					<div>
						<h3>Early bedtime</h3>
						<p>Go to sleep more at the same hour every night.</p>
						<a href="#">
							<span>
								<i class="fa fa-chevron-right"></i>
								<span> Find out more</span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Challenge;
