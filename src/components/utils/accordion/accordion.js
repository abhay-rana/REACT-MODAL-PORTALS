import React, { memo, useCallback, useMemo, useState } from "react";

import { AccordionProvider } from "./index";

import Header from "./header";
import Content from "./content";
import AccordionItem from "./accordrion-item";

const Accordion = ({ children, onClick = () => {} }) => {
	const [get_id, setExpand] = useState(null);

	const setId = useCallback(
		(id) => {
			if (id === get_id) setExpand("");
			else if (id != get_id) setExpand(id);
		},
		[get_id]
	);

	const value = useMemo(() => {
		return { get_id, setId, onClick };
	}, [get_id]);

	return (
		<>
			{/* if any of the value ={{key1,key2,key3}} changes so the useContext will re-render itself in all the components */}
			{/* children components will re-render if they use the useContext hook  */}
			<AccordionProvider value={value}>{children}</AccordionProvider>
		</>
	);
};

Accordion.Header = Header;
Accordion.Content = Content;
Accordion.AccordionItem = AccordionItem;

export default Accordion;
