import React, { useState } from "react";

const AddFriend = () => {
	const [addedFriend, setAddedFriend] = useState({
		name: "",
		age: "",
		email: "",
	});

	const onChange = (e) => {
		setAddedFriend({
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
