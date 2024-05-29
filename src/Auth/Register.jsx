import React, { useState } from "react";
import { useFormik } from "formik";
import InputField from "../Component/InputField";
import { Link } from "react-router-dom";

function Register() {
	const [validationErrors, setValidationErrors] = useState({
		minLength: true,
		upperCase: true,
		lowerCase: true,
		specialChar: true,
		number: true,
	});
	const formik = useFormik({
		initialValues: {
			email: "",
			username: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div>
			<form
				onSubmit={formik.handleSubmit}
				className="mt-[20px] lg:px-[5.5rem] px-[1rem] flex flex-col gap-[1.4375rem]"
			>
				<div className="welcome flex flex-col gap-[2px]">
					<p className="text-[2rem] text-[#333333] font-[500] font-Poppins leading-[3rem]">
						Welcome to Learn2Earn
					</p>
					<p className="text-base text-[#333333] font-[400]">
						Already have an account?
						<Link to="/login" className="underline">
							Log in
						</Link>
					</p>
				</div>
				<InputField
					name="email"
					type="email"
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
					value={formik.values.email}
					validationErrors={validationErrors}
					setValidationErrors={setValidationErrors}
				/>
				<InputField
					name="username"
					type={"text"}
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
					value={formik.values.username}
					validationErrors={validationErrors}
					setValidationErrors={setValidationErrors}
				/>
				<InputField
					name="password"
					type="password"
					pass={true}
					handleBlur={formik.handleBlur}
					handleChange={formik.handleChange}
					value={formik.values.password}
					validationErrors={validationErrors}
					setValidationErrors={setValidationErrors}
					register={true}
				/>
				<div className="agree flex flex-col gap-[8px]">
					<p className="leading-[1.5rem] p-2 font-Poppins">
						By creating an account, you agree to the{" "}
						<span className="underline">Terms of use</span> and{" "}
						<span className="underline">Privacy</span> Policy.{" "}
					</p>
				</div>
				<div className="submit flex flex-col gap-[8px]">
					<button
						type="submit"
						disabled={
							formik.isSubmitting ||
							(validationErrors.minLength &&
								validationErrors.upperCase &&
								validationErrors.lowerCase &&
								validationErrors.specialChar &&
								validationErrors.number)
						}
						className={`w-[256px] h-[64px] pt-[15px] pb-[16px] rounded-[32px] ${
							!validationErrors.minLength &&
							!validationErrors.upperCase &&
							!validationErrors.lowerCase &&
							!validationErrors.specialChar &&
							!validationErrors.number
								? "bg-[#1400FF] text-[#ffffff] hover:bg-[#1400FF]/75 duration-300 transition-colors"
								: "bg-[#111111]/25 text-[#ffffff]"
						} text-[#ffffff] text-[22px] font-[500] leading-[33px]`}
					>
						Create an account
					</button>
					<p className="text-base text-[#333333] font-[400]">
						Already have an account?
						<Link to="/login" className="underline">
							Log in
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}

export default Register;
