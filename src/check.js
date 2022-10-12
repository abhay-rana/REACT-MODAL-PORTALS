import React, { useState } from "react";
import Transition from "./transition";
import "../src/styles/global.css";

const Check = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<div>
				<button onClick={() => setShow(!show)}>hello dear</button>
				<Transition show={show}>
					<>
						<div>
							<p>hello abhay</p>
						</div>
					</>
				</Transition>
			</div>
		</>
	);
};

export default Check;
