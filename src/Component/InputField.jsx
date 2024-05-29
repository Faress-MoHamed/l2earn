import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

function InputField({
	name,
	type,
	pass,
	value,
	handleChange,
	handleBlur,
	disabled,
	validationErrors,
	setValidationErrors,
	register,
}) {
	const [visible, setVisible] = useState(false);
	const validatePassword = (password) => {
		const errors = {
			minLength: password.length < 8,
			upperCase: !/[A-Z]/.test(password),
			lowerCase: !/[a-z]/.test(password),
			specialChar: !/[@$!%*?&]/.test(password),
			number: !/[0-9]/.test(password),
		};
		setValidationErrors(errors);
		return !Object.values(errors).includes(true); // Return true if no errors
	};
	const handlePasswordChange = (e) => {
		const { value } = e.target;
		if (pass) {
			validatePassword(value);
		} else {
			handleChange(e);
		}
	};

	return (
		<div className="flex flex-col gap-[4px] font-Poppins w-full">
			<div className="flex justify-between">
				<label
					className="text-base capitalize font-[400] text-[#666666]"
					htmlFor={name.split(" ").join("")}
				>
					{name}
				</label>
				{pass && (
					<button
						onClick={(e) => {
							e.preventDefault();
							setVisible((prev) => !prev);
						}}
						className="flex justify-between text-[#666666]/80 items-center text-[18px] w-[73px]"
					>
						{visible ? (
							<BiShow className="w-[22px] h-[22px]" />
						) : (
							<BiHide className="w-[22px] h-[22px]" />
						)}
						<p>{visible ? "Show" : "Hide"}</p>
					</button>
				)}
			</div>
			<div className="relative">
				<input
					type={!pass ? type : visible ? "text" : "password"}
					id={name.split(" ").join("")}
					className={`placeholder:text-base placeholder:text-[#111111]/40 border py-[15px] px-[24px] caret-[#FF0000] focus:outline-none ${
						register
							? !validationErrors.minLength &&
							  !validationErrors.upperCase &&
							  !validationErrors.lowerCase &&
							  !validationErrors.specialChar &&
							  !validationErrors.number
								? "border-[#5E5E5E]/35"
								: "border-[#FF0000]/35"
							: "border-[#5E5E5E]/35"
					}  rounded-[12px] h-[56px] w-full`}
					placeholder={name}
					name={name.split(" ").join("")}
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
					disabled={disabled}
					onKeyUp={handlePasswordChange}
				/>
				{register && (
					<ul className="list-disc px-4 py-2 flex flex-wrap gap-6">
						<li
							className={`${
								validationErrors.minLength
									? "text-[#FF0000]/60"
									: "text-[#27FF03]/60"
							} text-[14px] font-Poppins`}
						>
							Use 8 or more characters
						</li>
						<li
							className={`${
								validationErrors.upperCase
									? "text-[#FF0000]/60"
									: "text-[#27FF03]/60"
							} text-[14px] font-Poppins`}
						>
							One Uppercase character
						</li>
						<li
							className={`${
								validationErrors.lowerCase
									? "text-[#FF0000]/60"
									: "text-[#27FF03]/60"
							} text-[14px] font-Poppins`}
						>
							One lowercase character
						</li>
						<li
							className={`${
								validationErrors.specialChar
									? "text-[#FF0000]/60"
									: "text-[#27FF03]/60"
							} text-[14px] font-Poppins`}
						>
							One special character
						</li>
						<li
							className={`${
								validationErrors.number
									? "text-[#FF0000]/60"
									: "text-[#27FF03]/60"
							} text-[14px] font-Poppins`}
						>
							One number
						</li>
					</ul>
				)}
			</div>
		</div>
	);
}

export default InputField;
