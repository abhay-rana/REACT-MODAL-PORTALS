import React from "react";
import Button from "../components/common/button";

const ButtonTest = () => {
	return (
		<>
			<div className="flex h-full flex-col">
				<header>
					<div className="border border-black p-4 text-center">Button Test</div>
				</header>
				<section className="flex grow flex-row items-stretch">
					<div className="flex basis-48  flex-col border border-red-400">
						<div>Types</div>
						<div className="my-8 border border-black">Basic</div>
						<div className="my-8 border border-black">Sizes</div>
						<div className="my-8 border border-black">Icons</div>
						<div className="my-8 border border-black">Loaders</div>
						<div className="my-8 border border-black">Block</div>
					</div>
					<div className="flex grow flex-col border border-pink-300">
						<div>Values</div>
						<div
							className="my-8 border border-black"
							id="basic-buttons"
						>
							<div className="flex flex-row">
								<Button>Primary</Button>
								<Button>Secondary</Button>
								<Button>default</Button>
								<Button>dashed</Button>
								<Button>outline</Button>
								<Button>link</Button>
							</div>
						</div>
						<div className="my-8 border border-black">value2</div>
						<div className="my-8 border border-black">value2</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ButtonTest;
