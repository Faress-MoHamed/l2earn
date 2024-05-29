import React, { useEffect } from "react";
import { getFromStorage } from "../utils/storage";
import Login from "./Login";
import toast from "react-hot-toast";

const RequireAuth = ({ children }) => {
	const isAuthenticated = getFromStorage("user");

	useEffect(() => {
		if (!isAuthenticated) {
			toast.error("Please login to continue");
		} else {
			toast.success("You are logged in");
		}
	}, [isAuthenticated]); // Dependency array ensures toast is only shown when isAuthenticated changes

	if (!isAuthenticated) {
		return <Login />;
	}

	return children;
};

export default RequireAuth;
