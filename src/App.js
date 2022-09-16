import React from "react";
import Button from "./components/button";

import UserModal from "./components/user-modal";
import { usePortalContextUpdater } from "./provider/portal-provider";

const App = () => {
	const portalModal = usePortalContextUpdater();
	console.log("renders");

	const runThis = () => {
		console.log("run this");
	};

	return (
		<>
			<div className="border-2 border-red-300">App</div>
			<button onClick={() => portalModal.show("user_modal")}>Show the user modal</button>
			<button onClick={() => portalModal.hide("user_modal")}>hide the user modal</button>
			<UserModal id="user_modal" className="border-2 border-red-500" onClose={runThis} closeButton closeOnEscapeKey />
			<div className="p-2 m-8">hello this is abhay</div>
		</>
	);
};

export default App;
