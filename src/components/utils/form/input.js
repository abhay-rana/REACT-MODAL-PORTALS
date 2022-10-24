import React from "react";

const Input = ({ name, value, ...restProps }) => {
	return (
		<>
			<label>
				<input
					id={name}
					name={name}
					{...restProps}
				/>
				<p>Abhay Rana</p>
			</label>
		</>
	);
};

export default Input;
