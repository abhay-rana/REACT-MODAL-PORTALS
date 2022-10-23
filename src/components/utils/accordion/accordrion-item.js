import React, { memo } from "react";

const AccordionItem = ({ children, id }) => {
	return (
		<>
			<div className="m-3 border-2 border-black">{React.Children.map(children, (child) => React.cloneElement(child, { id }))}</div>
		</>
	);
};

export default memo(AccordionItem);
