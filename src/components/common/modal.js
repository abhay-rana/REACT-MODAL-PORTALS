import React, { memo } from "react";
import { useModalState, useModalUpdater } from "../../provider/portal-provider";

import ReactPortal from "../../scripts/react-portal";

const Modal = ({ children, id, closeOnEscapeKey, closeButton, onClose, clickOutsideClose = false, scrollLock = true }) => {
	const { modal } = useModalState(); //portal_component is a kind of a state of the modal_id
	
	const { toggleModal } = useModalUpdater();

	const handleClose = () => {
		toggleModal.hide(id);
	};

	if (!modal[id]) return null; //if this modal id is not present so do not render in the dom (optimization)
	//and unmounts thew ReactPortal component

	return (
		<React.Fragment>
			{/* it will create the overlay on the full page of the viewport */}
			<div className="fixed top-0 left-0 right-0 bottom-0 bg-black/70">
				<ReactPortal wrapperId={id} closeOnEscapeKey={closeOnEscapeKey} handleClose={handleClose} onClose={onClose} clickOutsideClose={clickOutsideClose} scrollLock={scrollLock}>
					<div className="fixed top-1/2 left-1/2 right-1/2 bottom-1/2 flex flex-row justify-center items-center">
						<div className="relative">
							{children}
							<div className="absolute right-0 top-0 p-2">{closeButton ? <button onClick={handleClose}>X</button> : null}</div>
						</div>
					</div>
				</ReactPortal>
			</div>
		</React.Fragment>
	);
};

export default memo(Modal);
