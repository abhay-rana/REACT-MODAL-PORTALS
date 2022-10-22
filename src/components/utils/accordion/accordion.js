import React, { useState } from "react";

import { AccordionProvider } from "./index";

import Header from "./header";
import Content from "./content";
import AccordionItem from "./accordrion-item";

const Accordion = ({ children }) => {
	const [isExpanded, setExpand] = useState(false);
	return (
		<>
			<AccordionProvider value={{ isExpanded, setExpand }}>{children}</AccordionProvider>
		</>
	);
};

Accordion.Header = Header;
Accordion.Content = Content;
Accordion.AccordionItem = AccordionItem;

export default Accordion;
