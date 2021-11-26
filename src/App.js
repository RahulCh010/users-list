import React, { Fragment, useState } from "react";

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
		<Fragment>
			<AddUser onClickAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</Fragment>
	);
}

export default App;
