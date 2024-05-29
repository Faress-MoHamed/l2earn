import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Layout from "./Component/Layout";

function App() {
	const route = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Login />,
				},
				{
					path: "login",
					element: <Login />,
				},
				{
					path: "register",
					element: <Register />,
				},
			],
		},
	]);
	return <RouterProvider router={route} />;
}

export default App;
