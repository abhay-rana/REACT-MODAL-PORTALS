import React, { useEffect, memo } from "react";
import { usePortalContextState, usePortalContextUpdater } from "../provider/portal-provider";

import ReactPortal from "../scripts/react-portal";

const Modal = ({ children, id, className, closeOnEscapeKey, closeButton, onClose = () => {} }) => {
	const { portal_components } = usePortalContextState(); //portal_component is a kind of a state of the modal_id
	const portalModal = usePortalContextUpdater();

	const handleClose = () => {
		onClose();
		portalModal.hide(id);
	};

	if (!portal_components.modal[id]) return null; //if this modal id is not present so do not render in the dom (optimization)

	return (
		<>
			<ReactPortal wrapperId={id} closeOnEscapeKey={closeOnEscapeKey} handleClose={handleClose}>
				{closeButton ? (
					<button onClick={handleClose} className="close-btn">
						Close
					</button>
				) : null}
				<div>{children}</div>
			</ReactPortal>
		</>
	);
};

export default memo(Modal);
