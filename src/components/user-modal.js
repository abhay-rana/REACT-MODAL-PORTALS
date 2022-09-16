import React from "react";

import Modal from "./modal";

const UserModal = ({ id, className, ...rest }) => {
	return (
		<>
			<Modal id={id} {...rest}>
				<div className="absolute">this is my modal print it on the screen</div>
			</Modal>
		</>
	);
};

export default UserModal;
