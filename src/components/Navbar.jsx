import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../netflix-logo-png-2562.png";

const Navbar = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={`navbar ${show && "navbar__black"}`}>
			<img src={logo} alt="netflix logo" className="navbar__logo" />
			<img
				src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
				alt="profile avatar"
				className="navbar__avatar"
			/>
		</div>
	);
};

export default Navbar;
