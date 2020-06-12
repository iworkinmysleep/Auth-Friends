import React, { useState, useEffect } from "react";
import AddFriend from "./AddFriend";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		axiosWithAuth()
			.get("/api/friends")
			.then((res) => {
				console.log(res);
				setFriends(res.data);
				setIsLoading(false);
			})
			.catch((err) => console.log(err.response));
	}, []);

	return (
		<>
			{isLoading && <h1>Loading...</h1>}
			{friends.map((friend) => (
				<div className="friends-container">
					<div className="friends" key={friend.id}>
						<h4>{friend.name}</h4>
						<p>{friend.age}</p>
						<p>{friend.email}</p>
					</div>
				</div>
			))}
			<div>
				<AddFriend setFriends={setFriends} friends={friends}/>
			</div>
		</>
	);
};

export default FriendsList;
