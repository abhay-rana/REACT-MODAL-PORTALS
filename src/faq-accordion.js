import React, { useState } from "react";

import { Accordion } from "./components/utils/accordion";
import { data } from "./scripts/data";

const FaqAccordion = () => {
	const clickHandler = () => {
		console.log("fires when the component opens us");
	};
	return (
		<>
			<Accordion
				defaultExpanded={2}
				onClick={clickHandler}
			>
				{data.map((item) => {
					return (
						<Accordion.AccordionItem
							id={item.id}
							key={item.id}
						>
							<Accordion.Header>
								<div>{item.header}</div>
							</Accordion.Header>
							<Accordion.Content>
								<p>{item.desc}</p>
							</Accordion.Content>
						</Accordion.AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
};

export default FaqAccordion;
