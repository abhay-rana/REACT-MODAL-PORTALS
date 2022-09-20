import React from "react";

import Modal from "./common/modal";

const UserModal = ({ id, ...rest }) => {
	return (
		<>
			<Modal id={id} {...rest}>
				<div className=" border-2 border-red-500 w-[500px] h-[200px]  bg-white">
					<div>this is my modal print it on the screen hello this is abhay</div>
				</div>
			</Modal>
		</>
	);
};

export default UserModal;
