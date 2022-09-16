import React from "react";
import ReactPortal from "./react-portal";

const Modal = ({ children, id, visible }) => {
	if (!visible) return null;
	return (
		<>
			<ReactPortal wrapperId={id}>{children}</ReactPortal>
		</>
	);
};

export default Modal;
