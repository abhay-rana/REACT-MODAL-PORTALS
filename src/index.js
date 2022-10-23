import React from "react";
import ReactDOM from "react-dom/client";

import ModalProvider from "./provider/portal-provider";

import "./styles/global.css";

import App from "./app";
// import Check from "./check";

import FaqAccordion from "./faq-accordion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ModalProvider>
		{/* <App /> */}
		{/* <Check /> */}
		<FaqAccordion />
	</ModalProvider>
);
