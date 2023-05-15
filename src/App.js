import React, { useContext } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./App.scss";
const App = () => {
	const {currentUser}=useContext(AuthContext);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={currentUser?<Home />:<Login />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
