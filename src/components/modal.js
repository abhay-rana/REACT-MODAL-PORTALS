import React, { useEffect, memo } from "react";
import { usePortalContextState, usePortalContextUpdater } from "../provider/portal-provider";

import ReactPortal from "../scripts/react-portal";

const Modal = ({ children, id, closeOnEscapeKey, closeButton, onClose, clickOutsideClose = false }) => {
	const { portal_components } = usePortalContextState(); //portal_component is a kind of a state of the modal_id
	const portalModal = usePortalContextUpdater();

	const handleClose = () => {
		portalModal.hide(id);
	};

	if (!portal_components.modal[id]) return null; //if this modal id is not present so do not render in the dom (optimization)
	//and unmounts thew ReactPortal component

	return (
		<React.Fragment>
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70">
				<ReactPortal wrapperId={id} closeOnEscapeKey={closeOnEscapeKey} handleClose={handleClose} onClose={onClose} clickOutsideClose={clickOutsideClose}>
					<div>
						{children}
						<div className="absolute top-0 bottom-0">{closeButton ? <button onClick={handleClose}>Close</button> : null}</div>
					</div>
				</ReactPortal>
			</div>
		</React.Fragment>
	);
};

export default memo(Modal);
