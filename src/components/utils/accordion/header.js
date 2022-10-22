import React from "react";
import { useAccordion } from ".";

const Header = ({ children, ...restProps }) => {
	const { isExpanded, setExpand } = useAccordion();
	console.log({ restProps });
	return (
		<>
			<div>{children}</div>
			{/* <button onClick={() => setExpand(id)}></button> */}
		</>
	);
};

export default Header;
