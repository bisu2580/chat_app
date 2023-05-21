import React, { useContext} from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import "../App.scss";
const BottomBar = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="bottomBar">
			<div className="user">
				<img src={currentUser.photoURL} alt="" height="24px" width="24px" />
				<span>{currentUser.displayName}</span>
				<button onClick={() => signOut(auth)}>Logout</button>
			</div>
		</div>
	);
};
export default BottomBar;
