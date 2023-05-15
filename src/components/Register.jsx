import "../App.scss";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { Link } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import addfile from "../images/addfile.png";

const Register = () => {
	const [err, setErr] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const displayName = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const file = e.target[3].files[0];

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);

			const date = new Date().getTime();

			const storageRef = ref(storage, `${displayName + date}`);

			await uploadBytesResumable(storageRef, file).then(() => {
				getDownloadURL(storageRef).then(async (downloadURL) => {
					try {
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						});
						await setDoc(doc(db, "users", res.user.uid), {
							uid: res.user.uid,
							displayName,
							email,
							photoURL: downloadURL,
						});
						await setDoc(doc(db, "userChats", res.user.uid), {});
						navigate("/");
					} catch (err) {
						setErr(true);
						console.log(err);
					}
				});
			});
		} catch (err) {
			setErr(true);
		}
	};
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Chat App</span>
				<span className="title">Register</span>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="display name" />
					<input type="email" placeholder="email" />
					<input type="password" placeholder="password" />
					<input style={{ display: "none" }} type="file" id="file" />
					<label htmlFor="file">
						<img
							src={addfile}
							alt=""
							style={{ height: "32px", width: "32px" }}
						/>
						<span>Add an avatar</span>
					</label>
					<button>sign up</button>
					{err && <span>Something went wrong!!</span>}
					<p>
						Do you already have an account? <Link to="/login">Login</Link>
					</p>
				</form>
			</div>
		</div>
	);
};
export default Register;
