import * as React from "react";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";
import * as Tooltip from "@radix-ui/react-tooltip";

import Head from "components/Head";
import Button from "components/Button";
import { Question } from "phosphor-react";

const DownloadContainer = {
	show: {
		transition: {
			staggerChildren: 0.05,
		},
	},
};
const DownloadItem = {
	hidden: {
		opacity: 0,
		y: 30,
		transition: { duration: 0.75, ease: "circOut" },
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			y: { duration: 0.75, ease: "circOut" },
			opacity: { duration: 0.25 },
		},
	},
	exit: {
		opacity: 0,
		y: -15,
		transition: {
			y: { duration: 0.2, ease: "easeIn" },
			opacity: { duration: 0.2, ease: "linear" },
		},
	},
};

// Available downloads for each game version.
// Skip <type> prop for standalone pack.
// "Full" for FullSauce / complete pack with all add-ons integrated.
// "Add-on" for... well, an add-on.
const v119 = [
	{
		name: "Mintcraft",
		packVersion: "1.6.2",
		type: "Full",
	},
	{
		name: "Mintcraft",
		packVersion: "1.6.2",
	},
	{
		name: "MintBit",
		packVersion: "1.1",
		type: "Add-on",
	},
	{
		name: "Sounds",
		packVersion: "1.1",
		type: "Add-on",
	},
];
const v118 = [
	{
		name: "Mintcraft",
		packVersion: "1.5",
	},
	{
		name: "MintBit",
		packVersion: "1.0",
		type: "Add-on",
	},
	{
		name: "Sounds",
		packVersion: "1.1",
		type: "Add-on",
	},
];
const v117 = [
	{
		name: "Mintcraft",
		packVersion: "1.3",
	},
	{
		name: "MintBit",
		packVersion: "1.0",
		type: "Add-on",
	},
	{
		name: "Sounds",
		packVersion: "1.0",
		type: "Add-on",
	},
];
const v116 = [
	{
		name: "Mintcraft",
		packVersion: "1.1",
	},
	{
		name: "MintBit",
		packVersion: "1.0",
		type: "Add-on",
	},
	{
		name: "Sounds",
		packVersion: "1.0",
		type: "Add-on",
	},
];

export default function Mintcraft() {
	const t = useTranslations("Projects.Mintcraft");

	const [gameVersion, setGameVersion] = React.useState("1.19");

	function DownloadCard(
		props: React.PropsWithChildren<{
			name: string;
			packVersion: string;
			type?: string;
		}>
	) {
		const t = useTranslations("Projects.Mintcraft.Content.Download");
		const { type = "Standard" } = props;
		const dlLink =
			props.type === "Add-on"
				? "https://static.pprmint.art/download/mintcraft/" +
				  gameVersion +
				  "/" +
				  props.name +
				  "_Add-on_" +
				  props.packVersion +
				  "_(" +
				  gameVersion +
				  ").zip"
				: props.type === "Full"
				? "https://static.pprmint.art/download/mintcraft/" +
				  gameVersion +
				  "/" +
				  props.name +
				  "_" +
				  props.packVersion +
				  "_(FullSauce_" +
				  gameVersion +
				  ").zip"
				: "https://static.pprmint.art/download/mintcraft/" +
				  gameVersion +
				  "/" +
				  props.name +
				  "_" +
				  props.packVersion +
				  "_(" +
				  gameVersion +
				  ").zip";
		return (
			<m.div
				variants={DownloadItem}
				className="relative bg-black-light1 rounded-lg flex flex-col lg:flex-row overflow-hidden"
			>
				{props.type === "Full" && (
					<Tooltip.Provider>
						<Tooltip.Root delayDuration={200}>
							<Tooltip.Trigger className="absolute top-0 right-0 p-3 cursor-help text-yellow">
								<Question weight="bold" size={20} />
							</Tooltip.Trigger>
							<Tooltip.Portal>
								<Tooltip.Content>
									<m.div
										className="text-white bg-black-light2 px-4 py-1.5 rounded-full drop-shadow-lg"
										variants={DownloadItem}
									>
										{t("fullSauceInfo")}
										<Tooltip.Arrow className="fill-black-light2" />
									</m.div>
								</Tooltip.Content>
							</Tooltip.Portal>
						</Tooltip.Root>
					</Tooltip.Provider>
				)}
				<Image
					src={"/assets/mintcraft/packs/" + props.name + "_" + type + ".svg"}
					width={64}
					height={64}
					alt={props.name + "Icon"}
					className="h-auto lg:h-44 w-full lg:w-auto border-r border-black-light2"
				/>
				<div className="flex flex-col w-full h-full p-6">
					<h3 className="font-semibold font-display text-3xl text-white">
						{props.type === "Full" ? props.name + " FullSauce" : props.name}
					</h3>
					<p className="pb-6">Version {props.packVersion}</p>
					<Link href={dlLink} className="w-fit mt-auto ml-auto">
						<Button>{t("download")}</Button>
					</Link>
				</div>
			</m.div>
		);
	}

	function VersionSwitch() {
		const Versions = ["1.19", "1.18", "1.17", "1.16"];
		return (
			<div className="flex bg-black-light1 rounded-lg duration-100 overflow-hidden">
				{Versions.map((v) => (
					<button
						key={v}
						onClick={() => setGameVersion(v)}
						className={
							(gameVersion === v
								? "bg-black-light2 font-bold pointer-events-none"
								: "bg-transparent") +
							" hover:bg-black-light2 hover:font-bold duration-100 text-white sm:w-16 w-full h-10"
						}
					>
						{v}
					</button>
				))}
			</div>
		);
	}

	return (
		<>
			<Head title={t("Head.title")} description={t("Head.description")} />
			<main className="py-40 max-w-7xl mx-auto px-6 md:px-9 font-sans text-white-dark2">
				<h1 className="font-display font-extrabold text-center text-white text-5xl md:text-7xl xl:text-8xl pb-3">
					{t("Head.title")}
				</h1>
				<ParallaxBanner></ParallaxBanner>
				<div className="flex flex-col sm:flex-row gap-6 pb-6">
					<h2 className="font-semibold font-display text-white text-3xl flex-grow">
						{t("Content.Download.commonTitle")}
						&nbsp;
						{gameVersion}
					</h2>
					<VersionSwitch />
				</div>
				<AnimatePresence mode="wait">
					<m.div
						key={gameVersion}
						variants={DownloadContainer}
						initial="hidden"
						animate="show"
						exit="exit"
						className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-6"
					>
						{/* 1.19 */}
						{gameVersion === "1.19" && (
							<>
								{v119.map((item, index) => (
									<DownloadCard
										key={index}
										name={item.name}
										packVersion={item.packVersion}
										type={item.type}
									/>
								))}
							</>
						)}
						{/* 1.18 */}
						{gameVersion === "1.18" && (
							<>
								{v118.map((item, index) => (
									<DownloadCard
										key={index}
										name={item.name}
										packVersion={item.packVersion}
										type={item.type}
									/>
								))}
							</>
						)}
						{/* 1.17 */}
						{gameVersion === "1.17" && (
							<>
								{v117.map((item, index) => (
									<DownloadCard
										key={index}
										name={item.name}
										packVersion={item.packVersion}
										type={item.type}
									/>
								))}
							</>
						)}
						{/* 1.16 */}
						{gameVersion === "1.16" && (
							<>
								{v116.map((item, index) => (
									<DownloadCard
										key={index}
										name={item.name}
										packVersion={item.packVersion}
										type={item.type}
									/>
								))}
							</>
						)}
					</m.div>
				</AnimatePresence>
			</main>
		</>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
