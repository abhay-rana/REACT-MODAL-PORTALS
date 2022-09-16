import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import PortalProvider from "./provider/portal-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<PortalProvider>
			<App />
		</PortalProvider>
	</>
);
