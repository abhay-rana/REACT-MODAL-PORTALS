import React from "react";

const Button = ({ children, onClick = () => {} }) => {
	return (
		<>
			<button className="m-1 p-2 bg-gray-200 cursor-pointer rounded-sm hover:bg-gray-500" onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Button;
