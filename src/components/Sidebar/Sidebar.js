import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<div class="sidebar">
			<div clasName="avatarLayout">
				<div className="avatarContainer">
					<img
						src="https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						className="avatarImage"
					/>
				</div>
				<div className="links-header">Daily points - 2,466</div>
			</div>
			<div className="links-header">DASHBOARD</div>
			<a href="#overview">
				<i class="fa fa-fw fa-home" /> Overview
			</a>
			<a href="#dailyplan">
				<i className="fas fa-fw fa-clipboard-check" /> Daily Plan
			</a>
			<a href="#progress">
				<i class="fas fa-fw fa-chart-line" />
				Progress
			</a>

			<div className="links-header">PERSONAL TIPS</div>
			<a href="#nutritian">
				<i className="fas fa-fw fa-carrot" /> Nutritian
			</a>
			<a href="#sport">
				<i className="far fa-fw fa-futbol" /> Sport
			</a>
			<a href="#beauty">
				<i className="fas fa-fw fa-paint-brush" /> Beauty
			</a>
			<a href="#health">
				<i className="fa fa-fw fa-heartbeat" /> Health
			</a>
			<a href="#mindfulness">
				<i className="far fa-fw fa-user" /> Mindfulness
			</a>

			<div className="links-header">YOUR DATA</div>
			<a href="#blood">
				<i class="fa fa-fw fa-tint" /> Blood
			</a>
			<a href="#dna">
				<i className="fas fa-fw fa-dna" /> DNA
			</a>
			<a href="#microbiome">
				<i className="fa fa-fw fa-recycle" /> Microbiome
			</a>
			<a href="#questionnaire">
				<i className="far fa-fw fa-list-alt" /> Questionnaire
			</a>
		</div>
	);
};

export default Sidebar;
