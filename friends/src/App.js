import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import FriendsList from './components/FriendsList'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
	return (
		<Router>
			<div className="App">
				<ul style={{ display: "flex"}}>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/friendsList">Friends List</Link>
					</li>
				</ul>
				<Switch>
					<PrivateRoute exact path="/friendsList" component={FriendsList}></PrivateRoute>
					<Route path="/login" component={Login}></Route>
					<Route component={Login}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
