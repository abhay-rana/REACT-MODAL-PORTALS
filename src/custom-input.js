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

	const setThis = () => console.log("run this");

	const parentFires = () => console.log("parent fires");

	const garendParent = () => console.log("grand parent fires");
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
						iconImg={
							<Download
								className="h-6 w-6"
								fill="red"
							/>
						}
						onIconClick={setThis}
					/>
				</div>
			</div>
			<button onClick={setErr}>Set Error</button>
			<div
				onClickCapture={garendParent}
				className="pointer-events-none"
			>
				<div onClick={parentFires}>
					<div onClick={setThis}>Abhay Rana</div>
				</div>
			</div>
		</>
	);
};

export default CustomInput;
