import React from "react";
import { getFromStorage } from "../utils/storage";
import Login from "./Login";

const RequireAuth = ({ children }) => {
	const isAuthenticated = getFromStorage("user");
	if (!isAuthenticated) {
		return <Login />;
	}

	return children;
};

export default RequireAuth;
