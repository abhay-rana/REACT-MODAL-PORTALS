import React from "react";

const Input = ({ name, value, ...restProps }) => {
	return (
		<>
			<input
				id={name}
				name={name}
				{...restProps}
			/>
			<label htmlFor={name} />
		</>
	);
};

export default Input;
