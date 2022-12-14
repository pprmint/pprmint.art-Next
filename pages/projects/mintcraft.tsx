import * as React from "react";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";

import Head from "components/Head";
import Button from "components/Button";
import { Info } from "phosphor-react";

const SectionContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.05,
		},
	},
};
const Section = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: 0.75, ease: "circOut" },
			opacity: { duration: 0.25 },
		},
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: { duration: 0.3, ease: "easeIn" },
	},
};

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
		y: -20,
		transition: { duration: 0.3, ease: "easeIn" },
	},
};

// Again, I should put these in a JSON file or sth.
// Available downloads for each game version.
// Skip <type> prop for standalone pack.
// "Full" for FullSauce / complete pack with all add-ons integrated.
// "Add-on" for... well, an add-on.
const v119 = [
	{
		name: "Mintcraft",
		packVersion: "1.6.1",
		type: "Full",
	},
	{
		name: "Mintcraft",
		packVersion: "1.6.1",
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

		function DownloadButton() {
			// I'm too lazy to define download links manually, so here the filename will be changed based on the type prop.
			if (props.type === "Add-on") {
				return (
					<Link
						href={
							"https://download.pprmint.art/mintcraft/" +
							gameVersion +
							"/" +
							props.name +
							"_Add-on_" +
							props.packVersion +
							"_(" +
							gameVersion +
							").zip"
						}
						className="w-fit"
					>
						<Button>{t("download")}</Button>
					</Link>
				);
			}
			if (props.type === "Full") {
				return (
					<Link
						href={
							"https://download.pprmint.art/mintcraft/" +
							gameVersion +
							"/" +
							props.name +
							"_" +
							props.packVersion +
							"_(FullSauce_" +
							gameVersion +
							").zip"
						}
						className="w-fit"
					>
						<Button>{t("download")}</Button>
					</Link>
				);
			} else {
				return (
					<Link
						href={
							"https://download.pprmint.art/mintcraft/" +
							gameVersion +
							"/" +
							props.name +
							"_" +
							props.packVersion +
							"_(" +
							gameVersion +
							").zip"
						}
						className="w-fit"
					>
						<Button>{t("download")}</Button>
					</Link>
				);
			}
		}

		return (
			<m.div
				variants={DownloadItem}
				className="bg-black-light1 rounded-md flex flex-row sm:flex-col h-fit overflow-hidden ring-2 ring-black-light2 ring-inset"
			>
				<Image
					src={"/assets/mintcraft/packs/" + props.name + "/pack.svg"}
					width={500}
					height={500}
					alt={props.name + "Icon"}
					className="h-44 sm:h-full w-auto aspect-square"
				/>
                {props.type === "Full" && <Info weight="bold" className="absolute top-0 right-0 text-yellow" />}
				<div className="flex flex-col justify-center sm:items-center sm:text-center p-6">
					<h3 className="font-bold text-3xl text-white">
						{props.type === "Full" ? props.name + " FullSauce" : props.name}
					</h3>
					<p className="pb-6">Version {props.packVersion}</p>
					<DownloadButton />
				</div>
			</m.div>
		);
	}

	function VersionSwitch() {
		const Versions = ["1.19", "1.18", "1.17", "1.16"];
		return (
			<div className="flex rounded-md duration-100 border-2 border-yellow overflow-hidden">
				{Versions.map((v) => (
					<button
						key={v}
						onClick={() => setGameVersion(v)}
						className={
							(gameVersion === v
								? "bg-yellow-dark3 font-bold pointer-events-none"
								: "bg-transparent") +
							" hover:bg-black-light2 active:bg-yellow-dark3 hover:font-bold duration-100 text-white sm:w-16 w-full h-12"
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
			<main className="py-40 max-w-6xl mx-auto px-6 md:px-9 font-sans text-white-dark2">
				<m.div
					variants={SectionContainer}
					initial="hidden"
					animate="show"
					exit="exit"
				>
					<m.div variants={Section} className="py-5">
						<h1 className="font-bold text-white text-5xl md:text-6xl pb-3">
							{t("Head.title")}
						</h1>
					</m.div>
					<m.div variants={Section} className="py-5">
						<ParallaxBanner></ParallaxBanner>
					</m.div>
					<m.div variants={Section} className="py-5">
						<div className="flex flex-col sm:flex-row gap-6 pb-6">
							<h2 className="font-bold text-white text-3xl flex-grow">
								{t("Content.Download.commonTitle")}
								&nbsp;
								<m.div
									initial={{ y: "-20px" }}
									animate={{ y: "0px" }}
									style={{ display: "inline-block" }}
								>
									{gameVersion}
								</m.div>
							</h2>
							<VersionSwitch />
						</div>
						<AnimatePresence mode="wait">
							{/* 1.19 */}
							<m.div
								key={gameVersion}
								variants={DownloadContainer}
								initial="hidden"
								animate="show"
								exit="exit"
								className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
							>
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
					</m.div>
				</m.div>
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
