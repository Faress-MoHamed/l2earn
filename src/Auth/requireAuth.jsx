import React from "react";
import { Navigate } from "react-router-dom";
import { getFromStorage } from "../utils/storage";

const RequireAuth = ({ children }) => {
	const isAuthenticated = getFromStorage("auth");

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return children;
};

export default RequireAuth;
