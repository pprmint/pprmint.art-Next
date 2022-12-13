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
		y: -20,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			y: { duration: 0.4, ease: "easeOut" },
			opacity: { duration: 0.2 },
		},
	},
	exit: {
		opacity: 0,
		y: -20,
		transition: { duration: 0.2, ease: "easeIn" },
	},
};

// Array of available links
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

// Button
function Navlink(props: React.PropsWithChildren) {
	return (
		<button className="text-left hover:bg-black-light2 px-3 py-2 duration-75 rounded-md active:scale-[.97] w-full md:w-72 h-full">
			{props.children}
		</button>
	);
}

// Everything else. lmao
function Navigation() {
	const t = useTranslations();

	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);

	const [menuOpen, setMenuOpen] = React.useState(false);
	const [links, setLinks] = React.useState("pages");
	const handleMenuOpen = () => {
		setMenuOpen(true);
		document.body.classList.add("overflow-hidden");
	};
	const handleMenuClose = async () => {
		setMenuOpen(false);
		await new Promise((r) => setTimeout(r, 200));
		document.body.classList.remove("overflow-hidden");
		setLinks("pages");
	};
	return (
		<>
			<button
				onClick={handleMenuOpen}
				className="text-white p-3 mt-3 md:mt-6 mr-3 md:mr-6 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
			>
				<List weight="bold" />
			</button>
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
							className="fixed top-0 right-0 m-0 sm:m-3 w-full sm:w-auto z-50"
						>
							<div className="bg-black-light1 border-b sm:border border-black-light2 sm:rounded-xl p-3 shadow-2xl shadow-black max-h-screen sm:max-h-[calc(100vh-24px)] overflow-y-auto overflow-x-hidden">
								<div className="full flex flex-row pb-3 items-center">
									<h1 className="flex-grow pl-3 text-white text-xl md:text-2xl font-bold">
										{t("Navigation.whereToGo")}
									</h1>
									{links === "pages" && (
										<button
											onClick={handleMenuClose}
											className="text-white p-3 hover:bg-red-dark3 rounded-full duration-75 active:scale-90"
										>
											<X weight="bold" />
										</button>
									)}
									{links === "projects" && (
										<button
											onClick={() => setLinks("pages")}
											className="text-white p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
										>
											<ArrowUUpLeft weight="bold" />
										</button>
									)}
								</div>
								{/* Links */}
								<div className="flex flex-col">
									<AnimatePresence mode="wait">
										{links === "pages" && (
											<m.div
												key="pages"
												initial={{ opacity: 0, x: -40 }}
												animate={{
													opacity: 1,
													x: 0,
													transition: { duration: 0.4, ease: "circOut" },
												}}
												exit={{
													opacity: 0,
													x: -40,
													transition: { duration: 0.15, ease: "linear" },
												}}
												className="grid gap-1.5 sm:gap-3 grid-flow-row sm:grid-flow-row md:grid-cols-2 lg:grid-cols-3"
											>
												{Pages.map((Page) => (
													<Link
														key={Page.link}
														href={Page.link}
														onClick={handleMenuClose}
														scroll={false}
                                                        className={route === Page.link ? "ring-2 ring-black-light2 rounded-md pointer-events-none" : ""}
													>
														<Navlink>
															<span className="font-bold text-white">
																{t(Page.strings + ".title")}
															</span>
															<p className="text-white-dark2">
																{t(Page.strings + ".description")}
															</p>
														</Navlink>
													</Link>
												))}
												<div onClick={() => setLinks("projects")}>
													<Navlink>
														<span className="font-bold text-white">
															{t("Projects.Head.title")}
														</span>
														<p className="text-white-dark2">
															{t("Projects.Head.description")}
														</p>
													</Navlink>
												</div>
											</m.div>
										)}
										{links === "projects" && (
											<m.div
												key="projects"
												initial={{ opacity: 0, x: 40 }}
												animate={{
													opacity: 1,
													x: 0,
													transition: { duration: 0.4, ease: "circOut" },
												}}
												exit={{
													opacity: 0,
													x: 40,
													transition: { duration: 0.15, ease: "linear" },
												}}
												className="grid gap-1.5 sm:gap-3 grid-flow-row sm:grid-flow-row md:grid-cols-2 lg:grid-cols-3"
											>
												{Projects.map((Project) => (
													<Link
														key={Project.link}
														href={Project.link}
														onClick={handleMenuClose}
														scroll={false}
                                                        className={route === Project.link ? "ring-2 ring-black-light2 rounded-md pointer-events-none" : ""}
													>
														<Navlink>
															<span className="font-bold text-white">
																{t(Project.strings + ".title")}
															</span>
															<p className="text-white-dark2">
																{t(Project.strings + ".description")}
															</p>
														</Navlink>
													</Link>
												))}
											</m.div>
										)}
									</AnimatePresence>
								</div>
								<m.div
									initial={{ opacity: 0, x: -40 }}
									animate={{
										opacity: 1,
										x: 0,
										transition: { delay: 0.05, duration: 0.4, ease: "circOut" },
									}}
								>
									<hr className="border-dotted border-white-dark2 mx-3 my-3 sm:my-5" />
									<div className="grid grid-flow-row sm:grid-flow-col gap-1 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
										<Link
											href="/privacy"
											onClick={handleMenuClose}
											scroll={false}
										>
											<Navlink>
												<span className="font-bold text-white">
													{t("PrivacyPolicy.Head.title")}
												</span>
												<p className="text-white-dark2">
													{t("PrivacyPolicy.Head.description")}
												</p>
											</Navlink>
										</Link>
										<Link href={route} locale={otherLocale} scroll={false}>
											<Navlink>
												<span className="font-bold text-white">
													{t("Navigation.SwitchLocale.title")}
												</span>
												<p className="text-white-dark2">
													{t("Navigation.SwitchLocale.description")}
												</p>
											</Navlink>
										</Link>
									</div>
								</m.div>
								<m.div
									initial={{ opacity: 0, x: -40 }}
									animate={{
										opacity: 1,
										x: 0,
										transition: { delay: 0.1, duration: 0.4, ease: "circOut" },
									}}
								>
									<Footer />
								</m.div>
							</div>
						</m.div>
					</Portal.Root>
				)}
			</AnimatePresence>
		</>
	);
}

// Made with <3 and coffee + social buttons
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

// Container for it all
export default function Navbar() {
	return (
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
			<Navigation />
		</div>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
