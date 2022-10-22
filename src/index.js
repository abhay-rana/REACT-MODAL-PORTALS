import React from "react";
import ReactDOM from "react-dom/client";

import ModalProvider from "./provider/portal-provider";

import "./styles/global.css";

import App from "./app";
// import Check from "./check";
import Do from "./do";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ModalProvider>
		{/* <App /> */}
		{/* <Check /> */}
		<Do />
	</ModalProvider>
);
