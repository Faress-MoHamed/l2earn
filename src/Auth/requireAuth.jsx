import React from "react";
import { getFromStorage } from "../utils/storage";
import Login from "./Login";

const RequireAuth = ({ children }) => {
	const isAuthenticated = getFromStorage("user");
	console.log(isAuthenticated);
	if (!isAuthenticated) {
		return <Login/>;
	}

	return children;
};

export default RequireAuth;
