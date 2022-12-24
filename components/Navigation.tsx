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
const NavMenuTrigger =
	"group/root flex items-center gap-3 py-3 px-4 text-white-dark2 hover:text-white data-[state='open']:text-white duration-250 font-medium data-[state='open']:bg-black-light1 rounded-t-md data-[state='open']:translate-y-3";
const NavMenuContent =
	"absolute top-0 left-0 p-3 duration-250 data-[motion='from-start']:animate-enter-from-l data-[motion='from-end']:animate-enter-from-r data-[motion='to-start']:animate-exit-to-l data-[motion='to-end']:animate-exit-to-r";
const NavMenuViewport =
	"relative origin-top-left w-[var(--radix-navigation-menu-viewport-width)] overflow-hidden bg-black-light1 text-white-dark2 rounded-lg shadow-xl shadow-black h-[var(--radix-navigation-menu-viewport-height)] duration-250 ease-out";
const NavMenuLink =
	"block p-3 hover:bg-black-light2 duration-250 ease-out rounded-sm";

const NavAccordionItem =
	"group/root data-[state='open']:backdrop-brightness-75 duration-250 w-full";
const NavAccordionTrigger =
	"flex w-full text-left items-center px-6 py-4 data-[state='open']:py-6 hover:backdrop-brightness-200 data-[state='open']:font-bold text-white text-3xl data-[state='open']:text-4xl duration-250 ease-out";
const NavAccordionContent =
	"data-[state='open']:animate-slide-down data-[state='closed']:animate-slide-up overflow-hidden";
const NavAccordionContentList = "flex flex-col p-6 pt-0 gap-3 text-xl";
const NavAccordionContentListItem = "hover:text-white duration-100";

function ListItem(
	props: React.PropsWithChildren<{ href: string; strings: string }>
) {
	const t = useTranslations();
	return (
		<li>
			<NavigationMenu.Link asChild className={NavMenuLink}>
				<Link href={props.href}>
					<span className="text-white font-display font-bold text-xl">
						{t(props.strings + ".title")}
					</span>
					<p className="ListItemText">{t(props.strings + ".description")}</p>
				</Link>
			</NavigationMenu.Link>
		</li>
	);
}

function DesktopNavigation() {
	const t = useTranslations();
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);
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
							<ul className="grid grid-flow-row grid-cols-2">
								{Pages.map((Page) => (
									<ListItem
										key={Page.link}
										href={Page.link}
										strings={Page.strings}
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
							<ul className="grid grid-cols-2 grid-flow-row">
								{Projects.map((Project) => (
									<ListItem
										key={Project.link}
										href={Project.link}
										strings={Project.strings}
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
							<ul className="grid grid-flow-row">
								<li>
									<NavigationMenu.Link asChild>
										<Link href="/privacy" className={NavMenuLink}>
											<span className="text-white font-display font-bold text-xl">
												{t("PrivacyPolicy.Head.title")}
											</span>
											<p className="ListItemText">
												{t("PrivacyPolicy.Head.description")}
											</p>
										</Link>
									</NavigationMenu.Link>
								</li>
								<li>
									<NavigationMenu.Link asChild>
										<Link
											href={route}
											locale={otherLocale}
											scroll={false}
											className={NavMenuLink}
										>
											<span className="text-white font-display font-bold text-xl">
												{t("Navigation.SwitchLocale.title")}
											</span>
											<p className="ListItemText">
												{t("Navigation.SwitchLocale.description")}
											</p>
										</Link>
									</NavigationMenu.Link>
								</li>
							</ul>
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
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);
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
					<Portal.Root>
						<m.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.7 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed top-0 left-0 bg-black w-screen h-screen z-30"
							onClick={toggleOpen}
						/>
						<m.div
							initial={{ opacity: 0, y: 50 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: { duration: 0.4, ease: "circOut" },
							}}
							exit={{
								opacity: 0,
								y: 20,
								transition: { duration: 0.2, ease: "easeIn" },
							}}
							className="fixed top-0 left-0 flex flex-col w-full h-full z-40 text-white-dark2 backdrop-blur-md justify-center"
						>
							<Accordion.Root type="single" collapsible className="w-full">
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
												<Link
													key={Page.link}
													href={Page.link}
													scroll={false}
													onClick={() => setOpen(false)}
												>
													<li
														className={NavAccordionContentListItem}
														key={Page.link}
													>
														{t(Page.strings + ".title")}
													</li>
												</Link>
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
												<Link
													key={Project.link}
													href={Project.link}
													scroll={false}
													onClick={() => setOpen(false)}
												>
													<li
														className={NavAccordionContentListItem}
														key={Project.link}
													>
														{t(Project.strings + ".title")}
													</li>
												</Link>
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
											<Link
												href="/privacy"
												scroll={false}
												onClick={() => setOpen(false)}
											>
												<li className={NavAccordionContentListItem}>
													{t("PrivacyPolicy.Head.title")}
												</li>
											</Link>
											<Link href={route} locale={otherLocale} scroll={false}>
												<li className={NavAccordionContentListItem}>
													{t("Navigation.SwitchLocale.title")}
												</li>
											</Link>
										</ul>
									</Accordion.Content>
								</Accordion.Item>
							</Accordion.Root>
							<Footer />
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
		<div className="flex absolute p-6 w-full flex-row items-end bottom-0">
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
