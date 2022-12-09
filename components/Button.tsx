import Link from "next/link";
import React from "react";

export default function Button(
	props: React.PropsWithChildren<{
		large?: boolean;
	}>
) {
	const size = props.large
		? "rounded-xl text-xl md:text-2xl pt-3 pb-3 px-6 font-normal hover:font-bold"
		: "rounded-md pt-1 pb-1.5 px-4 font-normal";
	return (
		<button
			className={
				"bg-white hover:bg-white-dark1 active:bg-white-dark2 text-black font-sans duration-150 active:scale-95 flex items-center gap-5 w-max h-min" +
				" " +
				size
			}
		>
			{props.children}
		</button>
	);
}
