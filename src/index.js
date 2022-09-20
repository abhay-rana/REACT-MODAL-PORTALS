import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css";

import App from "./app";

import PortalProvider from "./provider/portal-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<PortalProvider>
			<App />
		</PortalProvider>
	</>
);
