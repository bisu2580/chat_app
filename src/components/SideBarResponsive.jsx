import Search from "./Search";
import Chats from "./Chats";
import React from "react";
import "../App.scss";
import NavBar from "./NavBar";

const SideBar = () => {
	return (
		<div className="sideBar-responsive">
			<NavBar />
			<Search />
			<Chats />
		</div>
	);
};
export default SideBar;
