import React,{ useContext, useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import * as FaIcons from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';
import "../App.scss"
const NavBar = () => {
	const {currentUser}=useContext(AuthContext)
	return (
		<div className="navBar">
			<span className="logo">Chat App</span>
			<div className="user">
				<img src={currentUser.photoURL} alt="" height="24px" width="24px"/>
				<span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>Logout</button>
			</div>
		</div>
	);
};
export default NavBar;
