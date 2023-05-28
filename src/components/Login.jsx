import { signInWithEmailAndPassword} from "firebase/auth";
import "../App.scss";
import { auth} from "../firebase";
import { useState } from "react";
import { useNavigate,Link} from "react-router-dom";
const Login = () => {

	const [err, setErr] = useState(false);
	
	const navigate=useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		}catch(err){
			setErr(true);
		}

	};

	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">Chat App</span>
				<span className="title">Login</span>
				<form onSubmit={handleSubmit}>
					<input type="email" placeholder="email" />
					<input type="password" placeholder="password" />
					<button>Sign In</button>
					<p>New to the app? <Link to="/register">Register</Link></p>
				</form>
			</div>
		</div>
	);
};
export default Login;
