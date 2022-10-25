import React, { forwardRef, memo, useEffect, useRef } from "react";
import { ReactComponent as Error } from "../../../assets/svg/cross.svg";

const Input = (
	{
		label,
		name,
		value,
		topHeight = 40,
		floatingLabel = true,
		onErrorClick = () => {},
		className,
		placeholder,
		required = false,
		error,
		iconImg,
		...restProps
	},
	ref
) => {
	const input_ref = useRef();
	let margin_top = "";
	let extra_class = "";
	let floating_className = "uppercase absolute left-0  ";
	if (!floatingLabel) {
		floating_className = `uppercase `;
	}

	if (!!error) extra_class = `border-1 border-red-600 `;

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
				className={`relative inline-block ${margin_top} h-full w-full border-2 border-black ${className}`}
				style={{ marginTop: `${topHeight}px` }}
			>
				{/* absolute will be respective to the parent and loose its old position */}
				<input
					ref={getRef}
					id={name}
					name={name}
					onFocus={addPlaceholder}
					onBlur={removePlaceholder}
					className={`peer w-full rounded-[5px] border-2 border-black p-[10px] outline-none transition-colors duration-150 focus:border-violet-600 ${extra_class}`}
					{...restProps}
				/>
				{label ? (
					<label
						htmlFor={name}
						className={`${floating_className} transition:all ease rounded-md p-[10px] duration-300 peer-focus:translate-x-2 peer-focus:-translate-y-3 peer-focus:bg-white peer-focus:px-3 peer-focus:py-0 peer-focus:text-sm peer-focus:text-violet-700`}
					>
						{label}
						{required ? <span className="absolute text-red-600">*</span> : null}
					</label>
				) : null}
				{error ? (
					<>
						<p className="text-red-600">{error}</p>
						<div
							className="absolute right-0 top-1 cursor-pointer p-[10px] hover:scale-125"
							onClick={onErrorClick}
						>
							{!iconImg ? (
								<Error
									fill="red"
									className="h-4 w-4"
								/>
							) : null}
						</div>
					</>
				) : null}
				{!!iconImg ? <div className="absolute right-0 top-1 cursor-pointer  p-[3px] hover:scale-125">{iconImg}</div> : null}
			</div>
		</>
	);
};

export default memo(forwardRef(Input));
