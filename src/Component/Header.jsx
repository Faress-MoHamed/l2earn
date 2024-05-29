function Header() {
	return (
		<header className="container w-3/5">
			<div className="logo flex items-center">
				<img src="./Pen.svg" alt="pen logo" />

				<div className="text-logo flex flex-col">
					<p className="text-[21px] font-[900] text-[#1464DF] leading-[25.6px]">
						LEARN2EARN
					</p>
					<p className="text-[10px] font-designer font-[400] text-[#07293E] leading-[9.52px]">
						EDUCATION PLATFORM
					</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
