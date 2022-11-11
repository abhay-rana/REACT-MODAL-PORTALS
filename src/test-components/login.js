import React, { useLayoutEffect } from "react";

import { ReactComponent as LoginImage } from "../assets/svg/asset.svg";

const Login = () => {
	// useLayoutEffect(() => {
	// 	document.body.style.background = "#F4F4F4";
	// 	return () => {};
	// }, []);

	return (
		<>
			<div className="flex h-full items-center justify-evenly">
				<div>
					<LoginImage width="450px" />
				</div>
				<div className="flex h-[700px] w-[600px] flex-col rounded-lg bg-white p-[20px]">
					<div className="flex-col">
						<div className="text-md text-black">Welcome To</div>
						<div className="text-xl text-primary">Design School</div>
					</div>
					<div className="mt-4 text-center leading-10 shadow-lg">Google</div>
					<div className="mt-4 text-center leading-10 shadow-lg">Facebook</div>
					<div>OR</div>
					<div>
						<input
							type="input"
							placeholder="Email"
							className="my-4 w-full border border-black p-3"
						/>
					</div>
					<div>
						<input
							type="input"
							placeholder="Password"
							className="my-4 w-full border border-black p-3"
						/>
					</div>
					<div className="flex justify-between">
						<label className="flex align-middle">
							<input type="checkbox" />
							<span className="ml-2">Remember me</span>
						</label>

						<div>Forget Password</div>
					</div>
					<div className="mt-4 text-center leading-10 shadow-lg">Login</div>
					<div className="flex flex-grow items-center justify-center">
						<p className="mb-20">Don't Remember the password</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
