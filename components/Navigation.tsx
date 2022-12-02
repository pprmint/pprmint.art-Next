import * as React from "react";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { Router, useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import logo from "animations/wordmark.json";
import Button from "./Button";

import { Coffee, Heart, X } from "phosphor-react";
import { SiGithub, SiTumblr, SiTwitter, SiYoutube } from "react-icons/si";
import { AnimatePresence, m } from "framer-motion";

const NavigationAnimation = {
	hidden: {
		opacity: 0,
		scale: 0.9,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			scale: { duration: 0.3, ease: "backOut" },
			opacity: { duration: 0.2 },
		},
	},
	exit: {
		opacity: 0,
		scale: 0.9,
		transition: { duration: 0.2, ease: "easeIn" },
	},
};

const Pages = [
	{
		link: "/",
		strings: "Navigation.Home",
	},
	{
		link: "/overview",
		strings: "Overview.Head",
	},
	{
		link: "/",
		strings: "Gallery.Head",
	},
	{
		link: "/",
		strings: "Projects.Head",
	},
	{
		link: "/",
		strings: "Contact.Head",
	},
];

export default function Navigation() {
	const t = useTranslations("Navigation");
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function Navlink(props: { strings: string }) {
		const t = useTranslations();
		return (
			<button className="text-left hover:bg-black-light2 px-3 py-2 duration-75 rounded-md active:scale-[.97] w-full md:w-72 h-full">
				<span className="font-bold text-white">
					{t(props.strings + ".title")}
				</span>
				<p className="text-white-dark2">{t(props.strings + ".description")}</p>
			</button>
		);
	}

	// Work in progress
	function Menu() {
		const t = useTranslations("Navigation");
		return (
			<div className="bg-black-light1 border border-black-light2 sm:rounded-xl p-3 shadow-2xl shadow-black">
				<div className="flex flex-row pb-3">
					<h1 className="flex-grow pl-3 text-white text-xl font-bold">
						Navigation
						<span className="text-sm font-normal pl-3">
							{t("workInProgress")}
						</span>
					</h1>
					<button
						onClick={handleClose}
						className="text-white p-2 hover:bg-red-dark3 rounded-full duration-75 active:scale-90"
					>
						<X weight="bold" />
					</button>
				</div>
				<div className="flex flex-col gap-3">
					<div className="grid gap-1 sm:gap-3 grid-flow-row sm:grid-flow-row md:grid-cols-2 lg:grid-cols-3">
						{Pages.map((Page) => (
							<Link href={Page.link} onClick={handleClose}>
								<Navlink strings={Page.strings} />
							</Link>
						))}
					</div>
					<hr className="border-dotted border-white-dark2" />
					<div className="grid grid-flow-row sm:grid-flow-col gap-1 sm:gap-3 h-full lg:grid-cols-3">
						<Link href="/privacy" onClick={handleClose}>
							<Navlink strings="PrivacyPolicy.Head" />
						</Link>
						<Link href={route} locale={otherLocale}>
							<Navlink strings="Navigation.SwitchLocale" />
						</Link>
					</div>
				</div>

				<div className="flex items-end">
					<div className="p-3 text-white-dark2 text-xs flex-grow">
						<p className="flex flex-row items-center">
							{t("madeWith")}
							<Link
								href="https://awfiquily.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Heart weight="fill" className="mx-1 text-red" />
							</Link>
							{t("and")}
							<Coffee weight="fill" className="mx-1 text-yellow" />
						</p>
						<p>
							{"© "}
							{new Date().getFullYear()} pprmint.
						</p>
					</div>
					<div className="col text-white text-xl">
						<Link
							href="https://twitter.com/npprmint"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90">
								<SiTwitter />
							</button>
						</Link>
						<Link
							href="https://youtube.com/@pprmint"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90">
								<SiYoutube />
							</button>
						</Link>
						<Link
							href="https://blog.pprmint.art"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90">
								<SiTumblr />
							</button>
						</Link>
						<Link
							href="https://github.com/pprmint"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90">
								<SiGithub />
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="z-10 fixed w-full flex px-9 items-center">
				<div className="mr-auto">
					<Link href="/">
						<Lottie animationData={logo} loop={false} className="h-24 w-56" />
					</Link>
				</div>
				<div className="flex gap-7 text-white">
					<p onClick={handleOpen} className="hover:font-bold cursor-pointer">
						Menu
					</p>
				</div>
			</div>
			<AnimatePresence>
				{open && (
					<m.div
						variants={NavigationAnimation}
						initial="hidden"
						animate="show"
						exit="exit"
						className="origin-top-right fixed top-0 sm:top-6 right-0 sm:right-6 w-full sm:w-auto z-50"
					>
						<Menu />
					</m.div>
				)}
			</AnimatePresence>
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
