import React from "react";
import { usePortalContextUpdater } from "./provider/portal-provider";

import UserModal from "./components/user-modal";

const App = () => {
	const portalModal = usePortalContextUpdater();

	const runThis = () => {
		console.log("run this");
	};

	return (
		<>
			<div className="border-2 border-red-300">App</div>
			<button onClick={() => portalModal.show("user_modal")}>Show the user modal</button>
			<button onClick={() => portalModal.hide("user_modal")}>hide the user modal</button>
			<UserModal id="user_modal" className="border-2 border-red-500" onClose={runThis} closeButton closeOnEscapeKey clickOutsideClose />
			<div className="p-2 m-8">hello this is abhay</div>
		</>
	);
};

export default App;
