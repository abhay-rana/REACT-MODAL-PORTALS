import { useState, useLayoutEffect, useEffect } from "react";
import { createPortal } from "react-dom";

//create the node-element and append to the body as the sibling of the "root" node
function createWrapperAndAppendToBody(wrapperId) {
	const wrapperElement = document.createElement("div");
	wrapperElement.setAttribute("id", wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
}

const ReactPortal = ({ children, wrapperId = "react-portal-wrapper", closeOnEscapeKey, handleClose = () => {} }) => {
	const [wrapperElement, setWrapperElement] = useState(null);

	//closing of the modal on the "escape button"
	useEffect(() => {
		let closeOnEscape;
		if (!!closeOnEscapeKey) {
			closeOnEscape = (e) => (e.key === "Escape" ? handleClose() : null);
			document.body.addEventListener("keydown", closeOnEscape);
		}
		return () => {
			if (!!closeOnEscapeKey) document.body.removeEventListener("keydown", closeOnEscape);
		};
	}, []);

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);
		let systemCreated = false;
		// if element is not found with wrapperId or wrapperId is not provided,
		// create and append to body
		if (!element) {
			systemCreated = true;
			element = createWrapperAndAppendToBody(wrapperId);
		}
		setWrapperElement(element);

		return () => {
			// delete the programmatically created element
			if (systemCreated && element.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [wrapperId]);

	// wrapperElement state will be null on very first render.
	if (wrapperElement === null) return null;

	return createPortal(children, wrapperElement);
};
export default ReactPortal;
