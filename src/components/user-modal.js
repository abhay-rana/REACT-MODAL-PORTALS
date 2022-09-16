import React from "react";
import { usePortal, usePortalContextState } from "../provider/portal-provider";

import Modal from "./modal";

const UserModal = ({ id }) => {
	const { portal_components } = usePortalContextState();

	console.log("user_modal");
	if (!portal_components.modal[id]) return null;

	return (
		<>
			<Modal id={id}>
				<div>this is my modal print it on the screen</div>
			</Modal>
		</>
	);
};

export default UserModal;
