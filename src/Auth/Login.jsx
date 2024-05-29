import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import InputField from "../Component/InputField";
import { getFromStorage } from "../utils/storage";

function Login() {
	const isAuthenticated = getFromStorage("auth");

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log(values);
			// Implement your login logic here
		},
	});
	if (isAuthenticated) {
		return <Navigate to="/dashboard" />;
	}

	return (
			<div>
				<form
					className="mt-[20px] lg:px-[5.5rem] px-[1rem] flex flex-col gap-[1.4375rem]"
					onSubmit={formik.handleSubmit}
				>
					<div className="welcome flex flex-col gap-[2px]">
						<p className="text-[2rem] text-[#333333] font-[500] font-Poppins leading-[3rem]">
							Welcome to Learn2Earn
						</p>
						<p className="text-base text-[#333333] font-[400]">
							Already have an account?
							<Link to="/register" className="underline">
								Register
							</Link>
						</p>
					</div>
					<InputField
						name="email"
						type="email"
						handleChange={formik.handleChange}
						value={formik.values.email}
					/>
					<InputField
						name="password"
						type="password"
						handleChange={formik.handleChange}
						value={formik.values.password}
						pass={true}
					/>
					<div className="submit flex flex-col gap-[8px]">
						<button
							type="submit"
							className="w-[256px] h-[64px] pt-[15px] pb-[16px] rounded-[32px] bg-[#1400FF] text-[#ffffff] hover:bg-[#1400FF]/75 duration-300 transition-colors text-[22px] font-[500] leading-[33px]"
						>
							Login
						</button>
						<p className="">
							Don't have an account?
							<Link to="/register" className="underline cursor-pointer">
								Register{" "}
							</Link>
						</p>
					</div>
				</form>
			</div>
	);
}

export default Login;
