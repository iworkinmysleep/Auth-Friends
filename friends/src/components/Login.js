import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
	const [user, setUser] = useState({
		userName: "",
		password: "",
	});

	const handleChanges = (e) => {
		setUser({
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/login", user)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.error(err.message));
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="userName">
				User Name
				<input
					type="text"
					name="userName"
					placeholder="enter user name..."
					value={user.userName}
					onChange={handleChanges}></input>
			</label>
			<label htmlFor="password">
				Password
				<input
					type="text"
					name="password"
					placeholder="enter password..."
					value={user.password}
					onChange={handleChanges}></input>
			</label>
			<button type="submit">Log In</button>
		</form>
	);
};

export default Login;
