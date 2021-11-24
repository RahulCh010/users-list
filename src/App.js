import React, { useState } from "react";

import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (name, age) => {
		setUsersList((prevUsers) => {
			return [{ name: name, age: age, id: Math.random().toString() }, ...prevUsers];
		});
	};

	return (
		<div className="App">
			<AddUser onClickAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
