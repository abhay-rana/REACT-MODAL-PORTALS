import React from "react";

const AccordionItem = ({ children, ...restProps }) => {
	return (
		<>
			<div>{React.Children.map(children, (children) => React.cloneElement(children, { ...restProps }))}</div>
		</>
	);
};

export default AccordionItem;
