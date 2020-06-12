import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = () => {
	const history = useHistory();
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const handleChanges = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post("/api/login", user)
			.then((res) => {
				console.log(res);
				localStorage.setItem("token", res.data.payload);
				history.push("/friendsList");
			})
			.catch((err) => console.error(err.response));
		setUser({
			...user,
			username: "",
			password: "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="username"
				placeholder="enter user name..."
				value={user.username}
				onChange={handleChanges}></input>

			<input
				type="text"
				name="password"
				placeholder="enter password..."
				value={user.password}
				onChange={handleChanges}></input>

			<button type="submit">Log In</button>
		</form>
	);
};

export default Login;
