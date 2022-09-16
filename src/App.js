import React from "react";

import UserModal from "./components/user-modal";
import { usePortalContextUpdater } from "./provider/portal-provider";

const App = () => {
	const portalModal = usePortalContextUpdater();
  
	return (
		<>
			<div>App</div>
			<button onClick={() => portalModal.show("user_modal")}>Show the modal</button>
			<button onClick={() => portalModal.hide("user_modal")}>hide the modal</button>
			<UserModal id="user_modal" />
		</>
	);
};

export default App;
