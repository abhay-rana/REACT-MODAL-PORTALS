import React, { forwardRef, useRef } from "react";

const TextArea = ({ value, onChange, ...rest }, ref) => {
	let text_area_ref = useRef();
	let extra_class = "";
	if (!!resize) extra_class = "resize";

	const getRef = (el) => {
		text_area_ref = el;
		if (!!ref) ref = el;
		console.log({ text_area_ref, ref });
	};

	const overrideOnChange = (e) => {
		onChange(e);
	};

	return (
		<>
			<div>
				<textarea
					{...rest}
					className={`border-1 border-black min-h-[40px] leading-[20px] ${extra_class}`}
					ref={getRef}
					onChange={overrideOnChange}
					value={value}
				/>
			</div>
			<div></div>
		</>
	);
};

export default forwardRef(TextArea);
