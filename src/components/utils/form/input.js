import React, { forwardRef, memo, useEffect, useRef } from "react";

const Input = ({ label, name, value, topHeight = 40, floatingLabel = true, className, placeholder, required = false, ...restProps }, ref) => {
	const input_ref = useRef();
	let margin_top = "";
	let floating_className = "uppercase absolute left-0  ";
	if (!floatingLabel) {
		floating_className = `uppercase `;
	}

	const getRef = (el) => {
		input_ref.current = el;
		if (!!ref) ref.current = el;
	};

	const addPlaceholder = () => {
		if (!!input_ref.current) input_ref.current.placeholder = placeholder;
	};

	const removePlaceholder = () => {
		if (!!input_ref.current) input_ref.current.placeholder = "";
	};

	return (
		<>
			<div
				className={`relative ${margin_top}`}
				style={{ marginTop: `${topHeight}px` }}
			>
				{/* absolute will be respective to the parent and loose its old position */}
				<input
					ref={getRef}
					id={name}
					name={name}
					onFocus={addPlaceholder}
					onBlur={removePlaceholder}
					className="peer rounded-[5px] border-2 border-black p-[10px] outline-none transition-colors duration-150 focus:border-violet-600"
					{...restProps}
				/>
				{label ? (
					<label
						htmlFor={name}
						className={`${floating_className} transition:all ease rounded-md p-[10px] duration-300 peer-focus:translate-x-2 peer-focus:-translate-y-2 peer-focus:bg-white peer-focus:py-[1px] peer-focus:text-sm peer-focus:text-violet-700`}
					>
						{label}
					</label>
				) : null}
			</div>
		</>
	);
};

export default memo(forwardRef(Input));
