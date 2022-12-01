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

	// Work in progress
	function Menu() {
		return (
			<div className="bg-black-light1 border border-black-light2 rounded-xl p-3 fixed top-10 right-1/2 translate-x-1/2 z-10 shadow-2xl shadow-black">
				<div className="flex flex-row pb-3">
					<h1 className="flex-grow pl-3 text-white text-xl font-bold">
						Navigation
					</h1>
					<button
						onClick={handleClose}
						className="text-white p-2 hover:bg-red-dark3 rounded-full duration-75 active:scale-90"
					>
						<X weight="bold" />
					</button>
				</div>

				<div className="grid grid-flow-col grid-rows-2 gap-3">
					<Link href="/" onClick={handleClose}>
						<button className="text-left hover:bg-black-light2 px-3 py-2 duration-75 rounded-md active:scale-[.97] w-72">
							<span className="font-bold text-white">Home</span>
							<p className="text-white-dark2">The start of the website</p>
						</button>
					</Link>
					<Link href="/overview" onClick={handleClose}>
						<button className="text-left hover:bg-black-light2 px-3 py-2 duration-75 rounded-md active:scale-[.97] w-72">
							<span className="font-bold text-white">Overview</span>
							<p className="text-white-dark2">Summary of the things I make</p>
						</button>
					</Link>
					<Link href="/privacy" onClick={handleClose}>
						<button className="text-left hover:bg-black-light2 px-3 py-2 duration-75 rounded-md active:scale-[.97] w-72">
							<span className="font-bold text-white">{t("privacyPolicy")}</span>
							<p className="text-white-dark2">
								Arguably the most interesting page on this site.
							</p>
						</button>
					</Link>
					<Link href={route} locale={otherLocale}>
						<button className="text-left hover:bg-black-light2 px-3 py-2 duration-75 rounded-md active:scale-[.97] w-72">
							<span className="font-bold text-white">
								{t("switchLocale", {
									locale: otherLocale,
								})}
							</span>
							<p className="text-white-dark2">
								Change the language used across the site. Kinda.
							</p>
						</button>
					</Link>
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
							<button
								onClick={handleClose}
								className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
							>
								<SiTwitter />
							</button>
						</Link>
						<Link
							href="https://youtube.com/@pprmint"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button
								onClick={handleClose}
								className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
							>
								<SiYoutube />
							</button>
						</Link>
						<Link
							href="https://blog.pprmint.art"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button
								onClick={handleClose}
								className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
							>
								<SiTumblr />
							</button>
						</Link>
						<Link
							href="https://github.com/pprmint"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button
								onClick={handleClose}
								className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90"
							>
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
			{open && <Menu />}
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
