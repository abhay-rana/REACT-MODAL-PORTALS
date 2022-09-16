import React from "react";
import ReactPortal from "./react-portal";

const Modal = ({ children, id }) => {
	return (
		<>
			<ReactPortal wrapperId={id}>{children}</ReactPortal>
		</>
	);
};

export default Modal;
