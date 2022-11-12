import React from "react";
// import Button from "../components/common/button";

const ButtonTest = () => {
	return (
		<>
			<div className="flex h-full flex-col gap-y-4">
				<header>
					<h1 className="p-2 text-center text-lg">Button Test</h1>
				</header>
				<section className="flex grow flex-col gap-y-10 border border-black">
					<div className="flex flex-row">
						<div className="flex basis-24 items-center justify-center border border-red-100	">Basic</div>
						<div className="flex grow flex-row border border-blue-300">
							{/* <div>
									<Button>primary</Button>
								</div>
								<div>
									<Button>primary</Button>
								</div>
								<div>
									<Button>primary</Button>
								</div> */}
						</div>
					</div>
					<div className="flex flex-row">
						<div>Advance</div>
						<div></div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ButtonTest;
