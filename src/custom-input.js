import React, { useState } from "react";

import Input from "./components/utils/form/input";
import AnupInput from "./components/utils/form/input-anup";
import AbhayInput from "./components/utils/form/input-new";

import { ReactComponent as Download } from "./assets/svg/download.svg";
import { ReactComponent as Cross } from "./assets/svg/cross.svg";

const CustomInput = () => {
	const [state, setState] = useState({});
	const [username, setUsername] = useState("");
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

	const runThis = () => console.log("run this");

	const parentFires = () => console.log("parent fires");

	const garendParent = () => console.log("grand parent fires");
	return (
		<>
			<div className="flex flex-col">
				<div className="w-[250px]">
					<Input
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						placeholder={"Enter Username"}
						autoComplete="off"
						floatingLabel
						topHeight={30}
						required
						label={"Username"}
						suffix={
							<Input.Suffix
								onClick={runThis}
								className="absolute top-2.5 right-0 px-4 "
							>
								<p>Image</p>
							</Input.Suffix>
						}
						prefix={
							<Input.Prefix
								onClick={runThis}
								className="absolute  left-0 top-2.5 px-1"
							>
								<Download
									className="h-6 w-6"
									fill="red"
								/>
							</Input.Prefix>
						}
					/>
				</div>
				<div className="m-4 w-[250px]">
					<AnupInput
						name="anup"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						placeholder={"Enter Username"}
						autoComplete="off"
						disabled
						floatingLabel
						topHeight={30}
						required
						label="username"
						note="note"
					/>
				</div>
				<div className="m-4 w-[250px]">
					<AnupInput
						name="anup"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						placeholder={"Enter Username"}
						autoComplete="off"
						floatingLabel
						disabled
						topHeight={30}
						required
						error="Email is not correct"
						stacked
					/>
				</div>
				<div className="m-4 w-[250px]">
					<AbhayInput
						labelStyle=""
						name="new-input"
						id={"unique"}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						label="Label"
						placeholder={"Enter Username"}
						autoComplete="off"
						floatingLabel
						note="hello this is note"
						topHeight={30}
						required
						filled
						stacked
						iconTrailing={
							<Cross
								width={12}
								height={18}
							/>
						}
					/>
				</div>
				<div className="m-4 w-[250px]">
					<AbhayInput
						name="new-input"
						id={"unique"}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						label="Label"
						placeholder={"Enter Username"}
						autoComplete="off"
						floatingLabel
						note="hello this is note"
						topHeight={30}
						required
						iconTrailing={
							<Cross
								width={12}
								height={18}
							/>
						}
					/>
				</div>

				{/* <div className="m-4 h-[50px] w-[300px]">
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
						suffix="Suffix"
					/>
				</div>
				<div className="m-5 h-[100px] w-[250px]">
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
						floatingLabel
						iconImg={
							<Download
								className="h-6 w-6"
								fill="red"
							/> //you can render the image or the normal image also
						}
						onIconClick={setThis}
					/>
				</div> */}
			</div>
		</>
	);
};

export default CustomInput;
