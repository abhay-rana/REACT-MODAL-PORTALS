import React from "react";
import { usePortalContextUpdater } from "./provider/portal-provider";

import UserModal from "./components/user-modal";
import Check from "./check";
import Button from "./components/common/button";

const App = () => {
	const portalModal = usePortalContextUpdater();

	const runThis = () => {
		console.log("run this");
	};

	return (
		<>
			<div className="border-2 border-red-300">App</div>
			<Button onClick={() => portalModal.show("user_modal")}>Show the user modal</Button>
			<Button onClick={() => portalModal.hide("user_modal")}>hide the user modal</Button>
			<UserModal id="user_modal" onClose={runThis} closeButton closeOnEscapeKey clickOutsideClose />
			
		</>
	);
};

export default App;
