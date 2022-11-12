import React from "react";
import ReactDOM from "react-dom/client";

import ModalProvider from "./provider/portal-provider";

import "./styles/global.css";

// import CustomModal from "./custom-modal";
// import CustomTextArea from "./custom-textarea";
// import FaqAccordion from "./faq-accordion";
// import CustomInput from "./custom-input";
// import Test from "./test";
import ButtonTest from "./test-components/button-test";
// import SpinnerTest from "./test-components/spinner-test";
// import Login from "./test-components/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ModalProvider>
		{/* <CustomModal /> */}
		{/* <CustomTextArea /> */}
		{/* <FaqAccordion /> */}
		{/* <CustomInput /> */}
		{/* <Button /> */}
		<ButtonTest />
		{/* <SpinnerTest /> */}
		{/* <Login /> */}
	</ModalProvider>
);
