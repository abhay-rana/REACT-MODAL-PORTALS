import React, { useEffect, useState } from "react";

const Transition = ({ show, children }) => {
	const [should_render, setRender] = useState(show);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const onAnimationEnd = () => {
		console.log("aniamation ends");
		if (!show) setRender(false);
	};
	console.log({ show, should_render });

	return should_render ? (
		<div
			className={`${show ? "fade-in-animation" : "fade-out-animation"}`}
			onAnimationEnd={onAnimationEnd}
		>
			{children}
		</div>
	) : null;
};

export default Transition;
