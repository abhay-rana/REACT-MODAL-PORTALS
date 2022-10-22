import React from "react";

const Content = ({ children, ...restProps }) => {
	console.log({ restProps });

	return (
		<>
			<div>{children}</div>
		</>
	);
};

export default Content;
