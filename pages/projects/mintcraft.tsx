import * as React from "react";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";

import Head from "components/Head";
import Button from "components/Button";

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
			staggerChildren: 0.035,
		},
	},
};
const DownloadItem = {
	hidden: {
		opacity: 0,
		y: "20px",
		transition: { duration: 0.5, ease: "circOut" },
	},
	show: {
		opacity: 1,
		y: "0px",
		transition: {
			y: { duration: 0.5, ease: "circOut" },
			opacity: { duration: 0.2 },
		},
	},
	exit: {
		opacity: 0,
		y: "-20px",
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
	const handleGameVersion = (
		event: React.MouseEvent<HTMLElement>,
		newGameVersion: string | null
	) => {
		// Always keep just one version selected.
		if (newGameVersion !== null) {
			setGameVersion(newGameVersion);
		}
	};

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
					>
						<Button>{t("download")}</Button>
					</Link>
				);
			}
		}

		return (
			<m.div variants={DownloadItem} className="bg-black-light1 rounded-md">
				<Image
					src={"/assets/mintcraft/packs/" + props.name + "/pack.svg"}
					width={500}
					height={500}
					alt={props.name + "Icon"}
				/>
				<div className="p-3">
					<h3>
						{props.type === "Full" ? props.name + " FullSauce" : props.name}.
					</h3>
					<p>Version {props.packVersion}</p>
				</div>
				<hr />
				<DownloadButton />
			</m.div>
		);
	}

	function VersionSwitch() {
		const Versions = ["1.19", "1.18", "1.17", "1.16"];
		return (
			<div className="flex">
				{Versions.map((v) => (
					<button
                        id={v}
						onClick={() => setGameVersion(v)}
						className={
							(gameVersion === v
								? "bg-black-light2 font-bold pointer-events-none"
								: "bg-transparent") +
							" hover:bg-black-light1 active:bg-black-light2 hover:font-bold duration-100 text-white w-16 h-12"
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
						<div className="flex gap-6 pb-3">
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
								className="grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-4"
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
