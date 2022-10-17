import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css";

import App from "./app";

import ModalProvider from "./provider/portal-provider";
import Check from "./check";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ModalProvider>
			{/* <App /> */}
			<Check />
		</ModalProvider>
	</React.StrictMode>
);
