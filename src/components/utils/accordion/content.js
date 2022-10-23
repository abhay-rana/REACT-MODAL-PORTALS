import React, { memo } from "react";
import { useAccordion } from ".";

const Content = ({ children, id }) => {
	const { get_id, setId } = useAccordion();

	return (
		<>
			{get_id == id ? (
				<>
					<div>{children}</div>
				</>
			) : null}
		</>
	);
};

export default memo(Content);
