import React from "react";

import Modal from "./modal";

const UserModal = ({ id, className, ...rest }) => {
	return (
		<>
			<Modal id={id} {...rest}>
				<div className="flex fixed top-1/2 left-1/2 border-2 border-red-500 w-[500px] h-[500px] z-1 bg-white">
					<div>this is my modal print it on the screen</div>
				</div>
			</Modal>
		</>
	);
};

export default UserModal;
