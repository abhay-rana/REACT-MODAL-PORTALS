import React, { useState } from "react";

import Input from "./components/utils/form/input";

const CustomInput = () => {
	const [state, setState] = useState({});

	const onChangeInput = (key, value) => {
		setState({ ...state, [key]: value });
	};

	return (
		<>
			<div>this</div>
			<Input
				name="password"
				value={state.password}
				onChange={(e) => onChangeInput(e.target.name, e.target.value)}
				type="input"
				placeholder={"this is placeholder"}
			/>
		</>
	);
};

export default CustomInput;
