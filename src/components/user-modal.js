import React from "react";

import Modal from "./modal";

const UserModal = ({ id, visible }) => {
	// const { modal } = usePortal();
	// if (!!modal.id) return null;
	return (
		<>
			<Modal visible={visible} id={id}>
				<div>this is my modal print it on the screen</div>
			</Modal>
		</>
	);
};

export default UserModal;
