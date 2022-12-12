import * as React from "react";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { Router, useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";
import * as Portal from "@radix-ui/react-portal";
import Lottie from "lottie-react";

import logo from "animations/wordmark.json";

import { ArrowUUpLeft, Coffee, Heart, List, X } from "phosphor-react";
import { SiGithub, SiTumblr, SiTwitter, SiYoutube } from "react-icons/si";

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
		link: "/gallery",
		strings: "Gallery.Head",
	},
	// Hidden until I can bother rewriting this to support onClick events.
	// {
	// 	link: "/",
	// 	strings: "Projects.Head",
	// },
	{
		link: "/contact",
		strings: "Contact.Head",
	},
];
const Projects = [
	{
		link: "/projects/mintcraft",
		strings: "Projects.Mintcraft.Head",
	},
	{
		link: "/projects/mintsans",
		strings: "Projects.Mintsans.Head",
	},
	{
		link: "/projects/mintbit",
		strings: "Projects.Mintbit.Head",
	},
	{
		link: "/projects/mintalt",
		strings: "Projects.MintAlt.Head",
	},
	{
		link: "/projects/startmenutiles",
		strings: "Projects.StartMenuTiles.Head",
	},
];

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

export default function Navigation() {
	const t = useTranslations("Navigation");
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);

	const [menuOpen, setMenuOpen] = React.useState(false);
	const handleMenuOpen = () => {
		setMenuOpen(true);
		document.body.classList.add("overflow-hidden");
	};
	const handleMenuClose = async () => {
		setMenuOpen(false);
		await new Promise((r) => setTimeout(r, 200));
		document.body.classList.remove("overflow-hidden");
		setProjectsMenuOpen(false);
	};

	const [projectsMenuOpen, setProjectsMenuOpen] = React.useState(false);
    const handleProjectsMenuToggle = () => {
		projectsMenuOpen ? setProjectsMenuOpen(false) : setProjectsMenuOpen(true);
	};

	// *Very* work in progress
	function ProjectsMenu() {
		const t = useTranslations("Projects");
		return (
			<div className="absolute">
				<div className="flex flex-col gap-3 pb-3">
					<div className="grid gap-1 sm:gap-3 grid-flow-row sm:grid-flow-row md:grid-cols-2 lg:grid-cols-3">
						{Projects.map((Project) => (
							<Link
								key={Project.link}
								href={Project.link}
								onClick={handleMenuClose}
								scroll={false}
							>
								<Navlink strings={Project.strings} />
							</Link>
						))}
					</div>
				</div>
			</div>
		);
	}

	function Footer() {
		const t = useTranslations("Navigation");
		return (
			<div className="flex flex-col sm:flex-row sm:items-end">
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
		);
	}

	return (
		<>
			<div className="bg-gradient-to-b from-black to-transparent z-50 fixed w-full flex items-start">
				<div className="mr-auto">
					<Link href="/" scroll={false}>
						<Lottie
							animationData={logo}
							loop={false}
							className="w-48 md:w-56 h-16 md:h-24 my-2 md:my-0 ml-6 md:ml-9"
						/>
					</Link>
				</div>
				<button
					onClick={handleMenuOpen}
					className="text-white p-3 mt-3 md:mt-6 mr-3 md:mr-6 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
				>
					<List weight="bold" />
				</button>
			</div>
			<AnimatePresence>
				{menuOpen && (
					<Portal.Root>
						<m.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.7 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed top-0 left-0 bg-black w-screen h-screen"
							onClick={handleMenuClose}
						/>
						<m.div
							variants={NavigationAnimation}
							initial="hidden"
							animate="show"
							exit="exit"
							className="origin-top-right fixed top-0 sm:top-6 left-0 sm:left-6 md:left-auto right-0 sm:right-6 w-full sm:w-auto z-50"
						>
							<div className="bg-black-light1 border-b sm:border border-black-light2 sm:rounded-xl p-3 shadow-2xl shadow-black max-h-screen overflow-y-auto overflow-x-hidden">
								<div className="flex flex-row pb-3 items-center">
									<h1 className="flex-grow pl-3 text-white text-xl md:text-2xl font-bold">
										{t("whereToGo")}
									</h1>
									<button
										onClick={handleMenuClose}
										className="text-white p-3 hover:bg-red-dark3 rounded-full duration-75 active:scale-90"
									>
										<X weight="bold" />
									</button>
								</div>
								<div className="flex flex-col gap-3 pb-3">
									<div className="grid gap-1 sm:gap-3 grid-flow-row sm:grid-flow-row md:grid-cols-2 lg:grid-cols-3">
										{Pages.map((Page) => (
											<Link
												key={Page.link}
												href={Page.link}
												onClick={handleMenuClose}
												scroll={false}
											>
												<Navlink strings={Page.strings} />
											</Link>
										))}
										<Link href="" onClick={handleProjectsMenuToggle}>
											<Navlink strings="Projects.Head" />
										</Link>
									</div>
									<AnimatePresence mode="wait">
										{projectsMenuOpen && (
											<m.div
												initial={{ height: "0px" }}
												animate={{ height: "190px" }}
												exit={{ height: "0%" }}
                                                transition={{duration: .3, ease: "circOut"}}
                                                className="relative overflow-hidden"
											>
												<ProjectsMenu />
											</m.div>
										)}
									</AnimatePresence>
									<hr className="border-dotted border-white-dark2 mx-3" />
									<div className="grid grid-flow-row sm:grid-flow-col gap-1 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
										<Link
											href="/privacy"
											onClick={handleMenuClose}
											scroll={false}
										>
											<Navlink strings="PrivacyPolicy.Head" />
										</Link>
										<Link href={route} locale={otherLocale} scroll={false}>
											<Navlink strings="Navigation.SwitchLocale" />
										</Link>
									</div>
								</div>
								<Footer />
							</div>
						</m.div>
					</Portal.Root>
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
