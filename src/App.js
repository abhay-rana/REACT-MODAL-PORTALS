import React, { useState } from "react";

import UserModal from "./components/user-modal";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div>App</div>
			<button onClick={() => setIsOpen(!isOpen)}>Show the modal</button>
			<UserModal id="user_modal" visible={isOpen} />
		</>
	);
};

export default App;
