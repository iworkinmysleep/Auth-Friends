import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = (props) => {
	const [addedFriend, setAddedFriend] = useState({
		name: "",
		age: "",
		email: "",
	});

	const handleChanges = (e) => {
		setAddedFriend({
			...addedFriend,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post("/api/friends", addedFriend)
			.then((res) => {
				console.log(res);
				props.setFriends([...props.friends, addedFriend]);
			})
			.catch((err) => console.log(err.response));
		setAddedFriend({
			name: "",
			age: "",
			email: "",
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">
					Name
					<input
						type="text"
						placeholder="enter name..."
						name="name"
						value={addedFriend.name}
						onChange={handleChanges}></input>
				</label>
				<label htmlFor="age">
					Age
					<input
						type="text"
						placeholder="enter age..."
						name="age"
						value={addedFriend.age}
						onChange={handleChanges}></input>
				</label>
				<label htmlFor="email">
					Name
					<input
						type="text"
						placeholder="enter email..."
						name="email"
						value={addedFriend.email}
						onChange={handleChanges}></input>
				</label>
				<button type="submit">Add Friend</button>
			</form>
		</div>
	);
};

export default AddFriend;
