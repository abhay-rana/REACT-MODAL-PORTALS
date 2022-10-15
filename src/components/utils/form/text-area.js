import React, { forwardRef, useEffect, useRef } from "react";

const TextArea = ({ value, onChange, resize, className, ...rest }, ref) => {
	let text_area_ref = useRef(null);

	useEffect(() => {
		if (text_area_ref?.scrollHeight) {
			const scrollHeight = text_area_ref.scrollHeight;
			text_area_ref.style.height = scrollHeight + "px";
		}
		return () => {};
	}, [value]);

	let extra_class = "";

	if (!!resize) extra_class = "resize";

	const getRef = (el) => {
		text_area_ref = el;
		if (!!ref) ref.current = el;
	};

	// Dealing with Textarea Height
	function calcHeight(value) {
		let numberOfLineBreaks = (value.match(/\n/g) || []).length;
		// min-height + lines x line-height + padding + border
		// let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
		let newHeight = numberOfLineBreaks * 20;
		return newHeight;
	}

	const overrideOnChange = (e) => {
		onChange(e);
		text_area_ref.style.height = calcHeight(e.target.value) + "px";
	};

	return (
		<>
			<div>
				<textarea
					{...rest}
					className={` ${className} ${extra_class}`}
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
