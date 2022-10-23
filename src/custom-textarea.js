import React, { useState } from "react";

import TextArea from "./components/utils/form/text-area";

const CustomTextArea = () => {
	const [state, setState] = useState("");
	return (
		<>
			<div>
				<TextArea
					value={state}
					onChange={(e) => setState(e.target.value)}
					className="m-4 w-[500px] border-2 border-black p-4"
					placeholder="This is placeholder"
					row_height={20} //this is in px this is line height
					min_row={4}
					max_row={10}
					maxLength={200}
				/>
			</div>
		</>
	);
};

export default CustomTextArea;
