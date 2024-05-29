import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
	//w-[52.6875rem]
	//w-[37.3125rem]
	return (
		<>
			<div className="flex w-full justify-between">
				<div className=" pl-[30px] lg:pt-6 py-3 lg:w-3/5 w-full overflow-y-auto h-screen">
					{
						<>
							<Header />
							<Outlet />
						</>
					}
				</div>
				<div className="w-2/5 lg:block hidden">
					<div className="w-full h-screen bg-[url('./assets/backGround.jpeg')] bg-cover  bg-no-repeat bg-center"></div>
				</div>
			</div>
		</>
	);
}
