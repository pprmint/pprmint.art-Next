import * as React from "react";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { Router, useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
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
		weight="bold"
		className="inline text-white-dark2 group-data-[state='open']/trigger:rotate-180 group-hover/trigger:text-white duration-200 ease-out"
		aria-hidden
	/>
);
const NavMenuTrigger =
	"flex py-3 px-5 rounded-lg bg-transparent hover:bg-black-light1 data-[state='open']:bg-black-light1 gap-3 group/trigger text-white font-bold duration-200 items-center";
const NavMenuContent = "absolute top-0 left-0 py-3";
const NavMenuViewport =
	"bg-black-light1 relative origin-top-left h-[var(--radix-navigation-menu-viewport-height)] duration-200 overflow-hidden text-white-dark2 rounded-lg shadow-xl shadow-black";
const NavMenuLink = "flex flex-col py-3 px-3 mx-3 hover:px-6 hover:mx-0 hover:bg-black-light2 duration-150 ease-out rounded-sm"

function ListItem(
	props: React.PropsWithChildren<{ href: string; strings: string }>
) {
	const t = useTranslations();
	return (
		<li>
			<NavigationMenu.Link asChild>
				<Link
					href={props.href}
					className={NavMenuLink}
				>
					<span className="text-white font-display font-bold text-xl">
						{t(props.strings + ".title")}
					</span>
					<p className="ListItemText">{t(props.strings + ".description")}</p>
				</Link>
			</NavigationMenu.Link>
		</li>
	);
}

function Navigation() {
	const t = useTranslations();
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);
	return (
		<NavigationMenu.Root className="relative">
			<NavigationMenu.List className="flex gap-3 p-6">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className={NavMenuTrigger}>
						{t("Overview.Head.title")}
						{Carret}
					</NavigationMenu.Trigger>

					<NavigationMenu.Content className={NavMenuContent}>
						<ul className="grid grid-flow-row">
							{Pages.map((Page) => (
								<ListItem href={Page.link} strings={Page.strings} />
							))}
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className={NavMenuTrigger}>
						{t("Projects.Head.title")}
						{Carret}
					</NavigationMenu.Trigger>

					<NavigationMenu.Content className={NavMenuContent}>
						<ul className="grid grid-flow-row">
							{Projects.map((Project) => (
								<ListItem href={Project.link} strings={Project.strings} />
							))}
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className={NavMenuTrigger}>
						Other
						{Carret}
					</NavigationMenu.Trigger>

					<NavigationMenu.Content className={NavMenuContent}>
						<ul className="grid grid-flow-row">
							<li>
								<NavigationMenu.Link asChild>
									<Link
										href="/privacy"
										className={NavMenuLink}
									>
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

				<NavigationMenu.Indicator className="NavigationMenuIndicator">
					<div className="Arrow" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="ViewportPosition">
				<NavigationMenu.Viewport className={NavMenuViewport} />
			</div>
		</NavigationMenu.Root>
	);
}

// Made with <3 and coffee + social buttons
function Footer() {
	const t = useTranslations("Navigation");
	return (
		<div className="flex flex-col sm:flex-row sm:items-end">
			<div className="p-3 mt-1.5 text-white-dark2 text-xs flex-grow">
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
				<Link
					href="https://ko-fi.com/pprmint"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90">
						<SiKofi />
					</button>
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
