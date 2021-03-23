import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="search-box">
				<input type="text" placeholder="Type in to Search.." />
			</div>
			<div className="notification">
				<a href="#notification">
					<i className="far fa-bell" />
				</a>
			</div>
			<div clasName="avatarLayout">
				<div className="avatarContainer">
					<img
						src="https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						className="avatarImage"
					/>
				</div>
			</div>
      <div className="profile">
      <a href="#profile">
				<h5>Jane Doe</h5>
        </a>
        </div>
		</div>
	);
};
export default Header;
