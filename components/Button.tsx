import Link from "next/link";
import React from "react";

export default function Button(
	props: React.PropsWithChildren<{
		large?: boolean;
		color?: string;
	}>
) {
	const size = props.large
		? "rounded-xl text-md md:text-xl py-2.5 md:py-3 px-5 md:px-6 font-normal hover:font-bold"
		: "rounded-md pt-1 pb-1.5 px-4 font-normal";
	const color =
		props.color === "green"
			? "bg-green hover:bg-green-dark1 active:bg-green-dark2 text-black"
			: props.color === "yellow"
			? "bg-yellow hover:bg-yellow-dark1 active:bg-yellow-dark2 text-black"
			: props.color === "blue"
			? "bg-blue hover:bg-blue-dark1 active:bg-blue-dark2 text-black"
			: props.color === "red"
			? "bg-red hover:bg-red-dark1 active:bg-red-dark2 text-black"
			: "bg-white hover:bg-white-dark1 active:bg-white-dark2 text-black";
	return (
		<button
			className={
                color +
				" font-sans duration-150 active:scale-95 flex items-center gap-5 w-max h-min " +
				size
			}
		>
			{props.children}
		</button>
	);
}
