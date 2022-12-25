import * as React from "react";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { Router, useRouter } from "next/router";
import { useTranslations } from "next-intl";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Portal from "@radix-ui/react-portal";
import * as Accordion from "@radix-ui/react-accordion";
import Lottie from "lottie-react";

import logo from "animations/wordmark.json";

import {
	ArrowUUpLeft,
	CaretDown,
	CaretRight,
	Coffee,
	Heart,
	List,
	X,
} from "phosphor-react";
import {
	SiGithub,
	SiKofi,
	SiTumblr,
	SiTwitter,
	SiYoutube,
} from "react-icons/si";
import { AnimatePresence, m } from "framer-motion";

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

const Carret = (
	<CaretDown
		size={18}
		weight="bold"
		className="inline text-white-dark2 group-data-[state='open']/root:rotate-180 group-hover/root:text-white group-data-[state='open']/root:text-white duration-250 ease-out ml-auto"
		aria-hidden
	/>
);

function DesktopNavigation() {
	const t = useTranslations();

	// Language switch
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);

	// Styles
	const NavMenuTrigger =
		"group/root flex items-center gap-3 py-3 px-4 text-white-dark2 hover:text-white data-[state='open']:text-white duration-250 font-medium data-[state='open']:bg-black-light1 rounded-t-md data-[state='open']:translate-y-3";
	const NavMenuContent =
		"absolute top-0 left-0 p-3 duration-250 data-[motion='from-start']:animate-enter-from-l data-[motion='from-end']:animate-enter-from-r data-[motion='to-start']:animate-exit-to-l data-[motion='to-end']:animate-exit-to-r";
	const NavMenuViewport =
		"relative origin-top-left w-[var(--radix-navigation-menu-viewport-width)] overflow-hidden bg-black-light1 text-white-dark2 rounded-lg shadow-xl shadow-black h-[var(--radix-navigation-menu-viewport-height)] duration-250 ease-out";

	function MenuItem(
		props: React.PropsWithChildren<{
			href: string;
			title: string;
			description: string;
			locale?: string;
			disableHighlight?: boolean;
		}>
	) {
		const highlight =
			!props.disableHighlight &&
			props.href === route &&
			" bg-black-light2 pointer-events-none";
		return (
			<li>
				<NavigationMenu.Link
					asChild
					className={
						"block p-3 hover:bg-black-light2 duration-250 ease-out rounded-sm" +
						highlight
					}
				>
					<Link href={props.href} scroll={false} locale={props.locale}>
						<span className="text-white font-display font-bold text-xl pb-0.5">
							{props.title}
						</span>
						<p className="ListItemText">{props.description}</p>
					</Link>
				</NavigationMenu.Link>
			</li>
		);
	}

	return (
		<>
			<NavigationMenu.Root>
				<NavigationMenu.List className="flex gap-3 p-6">
					<NavigationMenu.Item>
						<NavigationMenu.Trigger className={NavMenuTrigger}>
							{t("Navigation.Menu.general")}
							{Carret}
						</NavigationMenu.Trigger>

						<NavigationMenu.Content
							className={NavMenuContent + " w-[500px] lg:w-[600px]"}
						>
							<ul className="grid grid-flow-row grid-cols-2 gap-3">
								{Pages.map((Page) => (
									<MenuItem
										key={Page.link}
										href={Page.link}
										title={t(Page.strings + ".title")}
										description={t(Page.strings + ".description")}
									/>
								))}
							</ul>
						</NavigationMenu.Content>
					</NavigationMenu.Item>

					<NavigationMenu.Item>
						<NavigationMenu.Trigger className={NavMenuTrigger}>
							{t("Navigation.Menu.projects")}
							{Carret}
						</NavigationMenu.Trigger>

						<NavigationMenu.Content
							className={NavMenuContent + " w-[500px] lg:w-[600px]"}
						>
							<ul className="grid grid-cols-2 grid-flow-row gap-3">
								{Projects.map((Project) => (
									<MenuItem
										key={Project.link}
										href={Project.link}
										title={t(Project.strings + ".title")}
										description={t(Project.strings + ".description")}
									/>
								))}
							</ul>
						</NavigationMenu.Content>
					</NavigationMenu.Item>

					<NavigationMenu.Item>
						<NavigationMenu.Trigger className={NavMenuTrigger}>
							{t("Navigation.Menu.other")}
							{Carret}
						</NavigationMenu.Trigger>

						<NavigationMenu.Content
							className={NavMenuContent + " w-[400px] lg:w-[500px]"}
						>
							<ul className="grid grid-flow-row gap-3">
								<MenuItem
									title={t("PrivacyPolicy.Head.title")}
									description={t("PrivacyPolicy.Head.description")}
									href="/privacy"
								/>
								<MenuItem
									title={t("Navigation.SwitchLocale.title")}
									description={t("Navigation.SwitchLocale.description")}
									href={route}
									locale={otherLocale}
									disableHighlight
								/>
							</ul>
							<Footer className="pl-3 pt-3 items-center " />
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				</NavigationMenu.List>
				<div className="absolute flex justify-end w-full top-20 right-6">
					<NavigationMenu.Viewport className={NavMenuViewport} />
				</div>
			</NavigationMenu.Root>
		</>
	);
}

function MobileNavigation() {
	const t = useTranslations();

	// Language switch
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);

	// Opening and closing logic
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
		document.body.classList.add("overflow-hidden");
	};
	const handleClose = async () => {
		setOpen(false);
		await new Promise((r) => setTimeout(r, 200));
		document.body.classList.remove("overflow-hidden");
	};
	const toggleOpen = open ? handleClose : handleOpen;

	// Styles
	const NavAccordionItem =
		"group/root data-[state='open']:backdrop-brightness-75 duration-250 w-full border-black-light2 border-0 data-[state='open']:border-y";
	const NavAccordionTrigger =
		"flex w-full text-left items-center px-6 py-4 data-[state='open']:py-6 hover:backdrop-brightness-200 data-[state='open']:font-bold text-white text-3xl data-[state='open']:text-4xl duration-250 ease-out";
	const NavAccordionContent =
		"data-[state='open']:animate-slide-down data-[state='closed']:animate-slide-up overflow-hidden";
	const NavAccordionContentList = "flex flex-col p-6 pt-0 text-xl";

	function ListItem(
		props: React.PropsWithChildren<{
			href: string;
			title: string;
			locale?: string;
			disableHighlight?: boolean;
		}>
	) {
		const highlight =
			!props.disableHighlight &&
			props.href === route &&
			" font-bold text-white pointer-events-none";
		return (
			<Link
				href={props.href}
				scroll={false}
				onClick={handleClose}
				locale={props.locale}
			>
				<li className={"hover:text-white py-1.5 duration-100" + highlight}>
					{props.title}
				</li>
			</Link>
		);
	}

	return (
		<>
			<button
				className="fixed top-4 right-4 text-white p-4 rounded-full z-50 hover:bg-black-light1 duration-250"
				onClick={toggleOpen}
			>
				{open ? <X weight="bold" /> : <List weight="bold" />}
			</button>
			<AnimatePresence>
				{open && (
					<Portal.Root className="flex">
                        {/* Overlay */}
						<m.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { duration: 0.2 } }}
							exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.2 } }}
							className="fixed top-0 left-0 bg-[#111a] w-screen h-screen z-40 backdrop-blur-md"
							onClick={handleClose}
						/>
                        {/* Main container */}
						<m.div
							initial={{ opacity: 0, y: "calc(-50% + 50px)" }}
							animate={{
								opacity: 1,
								y: "-50%",
								transition: { duration: 0.4, ease: "circOut", delay: 0.2 },
							}}
							exit={{
								opacity: 0,
								y: "calc(-50% + 50px)",
								transition: { duration: 0.2, ease: "easeIn" },
							}}
							className="z-40 absolute -translate-y-1/2 top-1/2 w-full"
						>
							<Accordion.Root
								type="single"
								collapsible
								className="w-full text-white-dark2"
							>
								<Accordion.Item value="general" className={NavAccordionItem}>
									<Accordion.Header>
										<Accordion.Trigger className={NavAccordionTrigger}>
											{t("Navigation.Menu.general")}
											{Carret}
										</Accordion.Trigger>
									</Accordion.Header>
									<Accordion.Content className={NavAccordionContent}>
										<ul className={NavAccordionContentList}>
											{Pages.map((Page) => (
												<ListItem
													key={Page.link}
													title={t(Page.strings + ".title")}
													href={Page.link}
												/>
											))}
										</ul>
									</Accordion.Content>
								</Accordion.Item>

								<Accordion.Item value="projects" className={NavAccordionItem}>
									<Accordion.Header>
										<Accordion.Trigger className={NavAccordionTrigger}>
											{t("Navigation.Menu.projects")}
											{Carret}
										</Accordion.Trigger>
									</Accordion.Header>
									<Accordion.Content className={NavAccordionContent}>
										<ul className={NavAccordionContentList}>
											{Projects.map((Project) => (
												<ListItem
													key={Project.link}
													title={t(Project.strings + ".title")}
													href={Project.link}
												/>
											))}
										</ul>
									</Accordion.Content>
								</Accordion.Item>

								<Accordion.Item value="other" className={NavAccordionItem}>
									<Accordion.Header>
										<Accordion.Trigger className={NavAccordionTrigger}>
											{t("Navigation.Menu.other")}
											{Carret}
										</Accordion.Trigger>
									</Accordion.Header>
									<Accordion.Content className={NavAccordionContent}>
										<ul className={NavAccordionContentList}>
											<ListItem
												href="/privacy"
												title={t("PrivacyPolicy.Head.title")}
											/>
											<ListItem
												href={route}
												locale={otherLocale}
												title={t("Navigation.SwitchLocale.title")}
												disableHighlight
											/>
										</ul>
									</Accordion.Content>
								</Accordion.Item>
							</Accordion.Root>
						</m.div>
                        {/* Footer */}
						<m.div
							initial={{ opacity: 0, y: 50 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: { duration: 0.4, ease: "circOut", delay: 0.3 },
							}}
							exit={{
								opacity: 0,
								y: 20,
								transition: { duration: 0.2, ease: "easeIn" },
							}}
							className="absolute bottom-0 p-6 w-full z-40"
						>
							<Footer className="items-end" />
						</m.div>
					</Portal.Root>
				)}
			</AnimatePresence>
		</>
	);
}

// Made with <3 and coffee + social buttons
function Footer(props: { className?: string }) {
	const t = useTranslations("Navigation");
	return (
		<div className={"flex flex-row " + props.className}>
			<div className="text-white-dark2 text-xs flex-grow">
				<p className="flex flex-row items-center leading-3">
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
			<div className="flex text-white text-xl">
				<Link
					href="https://twitter.com/npprmint"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
				>
					<SiTwitter />
				</Link>
				<Link
					href="https://youtube.com/@pprmint"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
				>
					<SiYoutube />
				</Link>
				<Link
					href="https://blog.pprmint.art"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
				>
					<SiTumblr />
				</Link>
				<Link
					href="https://github.com/pprmint"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
				>
					<SiGithub />
				</Link>
				<Link
					href="https://ko-fi.com/pprmint"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
				>
					<SiKofi />
				</Link>
			</div>
		</div>
	);
}

// Container for it all
export default function Navbar() {
	return (
		<div className="bg-gradient-to-b from-black to-transparent z-50 fixed w-full h-24 flex items-start">
			<div className="mr-auto">
				<Link href="/" scroll={false} tabIndex={1}>
					<Lottie
						animationData={logo}
						loop={false}
						className="w-48 md:w-56 h-16 md:h-24 my-2 md:my-0 ml-6 md:ml-9"
					/>
				</Link>
			</div>
			<div className="hidden md:flex">
				<DesktopNavigation />
			</div>
			<div className="block md:hidden">
				<MobileNavigation />
			</div>
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
