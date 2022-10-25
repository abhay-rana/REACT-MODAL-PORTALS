import React, { useState } from "react";

import Input from "./components/utils/form/input";

const CustomInput = () => {
	const [state, setState] = useState({});

	const onChangeInput = (key, value) => {
		setState({ ...state, [key]: value });
	};

	return (
		<>
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
			/>
			<Input
				name="name"
				label="Name"
				value={state.password}
				onChange={(e) => onChangeInput(e.target.name, e.target.value)}
				type="input"
				placeholder={"Enter "}
				autoComplete="off"
				required
				floatingLabel
				className="mt-6"
			/>
		</>
	);
};

export default CustomInput;
