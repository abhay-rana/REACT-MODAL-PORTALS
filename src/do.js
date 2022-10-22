import React from "react";

import { Accordion } from "./components/utils/accordion";

const Do = () => {
	const clickHandler = () => {
		console.log("click handeled");
	};

	return (
		<>
			<Accordion
				defaultExpanded={2}
				onClick={clickHandler}
			>
				<Accordion.AccordionItem id="1">
					<Accordion.Header>
						<div>this is header 1</div>
					</Accordion.Header>
					<Accordion.Content>
						<p>this is content 1</p>
					</Accordion.Content>
				</Accordion.AccordionItem>
				<Accordion.AccordionItem id="2">
					<Accordion.Header>
						<div>this is header 2</div>
					</Accordion.Header>
					<Accordion.Content>
						<p>this is content 2</p>
					</Accordion.Content>
				</Accordion.AccordionItem>
				<Accordion.AccordionItem id="3">
					<Accordion.Header>
						<div>this is header 3</div>
					</Accordion.Header>
					<Accordion.Content>
						<p>this is content 3</p>
					</Accordion.Content>
				</Accordion.AccordionItem>
			</Accordion>
		</>
	);
};

export default Do;
