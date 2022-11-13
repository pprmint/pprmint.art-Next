import * as React from "react";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { Router, useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import logo from "src/animations/wordmark.json";
import Button from "./Button";
import { Favorite, Cafe } from "@carbon/icons-react";

export default function Navigation() {
	const t = useTranslations("Navigation");
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);

    // Work in progress
	function Menu() {
		return (
			<p className="flex flex-row items-center text-white">
				{t("madeWith")}
				<Link
					href="https://awfiquily.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Favorite className="mx-1" />
				</Link>
				{t("and")}
				<Cafe className="mx-1" />
				{"© "}
				{new Date().getFullYear()} pprmint.
			</p>
		);
	}

	return (
		<div className="z-10 fixed w-full flex h-15 pl-5 pr-7 items-center">
			<div className="mr-auto">
				<Link href="/">
					<Lottie animationData={logo} loop={false} className="h-20" />
				</Link>
			</div>
			<div className="flex gap-7 text-white">
				<Link
					href={route}
					locale={otherLocale}
					scroll={false}
					onClick={() =>
						window.scrollTo({
							top: 0,
							behavior: "smooth",
						})
					}
				>
					{/* <Language fontSize="inherit" /> */}
					{t("switchLocale", {
						locale: otherLocale,
					})}
				</Link>
				<Link
					href="/privacy"
					scroll={false}
				>
					{t("privacyPolicy")}
				</Link>
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
