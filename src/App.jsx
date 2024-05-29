import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Auth/Register";
import Layout from "./Component/Layout";
import Dashboard from "./Component/Dashboard";
import RequireAuth from "./Auth/RequireAuth";

function App() {
	const route = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: (
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					),
				},
				{
					path: "register",
					element: <Register />,
				},
				{
					path: "dashboard",
					element: <Dashboard />,
				},
			],
		},
	]);
	return <RouterProvider router={route} />;
}

export default App;
