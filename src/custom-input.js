import React, { useState } from "react";

import Input from "./components/utils/form/input";

import { ReactComponent as Download } from "./assets/svg/download.svg";

const CustomInput = () => {
	const [state, setState] = useState({});
	const [error, setError] = useState("");

	const onChangeInput = (key, value) => {
		setState({ ...state, [key]: value });
	};

	const setErr = () => {
		if (error) setError("");
		else setError("This is Error");
	};

	const fireError = () => {
		console.log("hello abhay");
	};
	return (
		<>
			<div className="flex flex-col">
				<Input
					label="Username"
					name="username"
					value={state.password}
					onChange={(e) => onChangeInput(e.target.name, e.target.value)}
					type="input"
					placeholder={"Enter Username"}
					autoComplete="off"
					floatingLabel
					topHeight={30}
				/>
				<div className="m-4 h-[50px] w-[300px]">
					<Input
						topHeight={50}
						label="Password"
						name="password"
						value={state.password}
						onChange={(e) => onChangeInput(e.target.name, e.target.value)}
						type="input"
						placeholder={"Enter password"}
						autoComplete="off"
						floatingLabel
						required
						onFocus={setErr}
						error={error}
						onErrorClick={fireError}
					/>
				</div>
				<div className="h-[100px] w-[250px]">
					<Input
						name="name"
						label="Name"
						value={state.password}
						onChange={(e) => onChangeInput(e.target.name, e.target.value)}
						type="input"
						placeholder={"Enter "}
						autoComplete="off"
						required
						disabled
						error="This is error message"
						floatingLabel
						className="mt-6"
						iconImg={
							<Download
								className="h-6 w-6"
								fill="red"
							/>
						}
					/>
				</div>
			</div>
			<button onClick={setErr}>Set Error</button>
		</>
	);
};

export default CustomInput;
