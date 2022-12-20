import Link from "next/link";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { m } from "framer-motion";

import Head from "components/Head";
import Button from "components/Button";
import { House } from "phosphor-react";
import NoSSR from "components/NoSSR";

function randomIntForString(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomStringInt = randomIntForString(1, 8);

import { SectionContainer, Section } from "animations/sectionAnimations";



export default function NotFound() {
	const t = useTranslations("404");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.title")}
				color="#1199ff"
			/>
			<m.div
				variants={SectionContainer}
				initial="hidden"
				animate="show"
				exit="exit"
				className="py-40 max-w-7xl h-screen px-6 mx-auto flex flex-col justify-center items-center"
			>
				<m.div variants={Section}>
					<h1 className="font-thin text-red text-7xl md:text-9xl pb-6 text-center">
						{t("Content.error")}
						<span className="font-normal font-pixel">404</span>
					</h1>
				</m.div>
				<m.div variants={Section}>
					<NoSSR>
						<h2 className="font-sans font-bold text-white text-5xl md:text-6xl pb-2 text-center">
							{t("Content.Random." + randomStringInt)}
						</h2>
					</NoSSR>
				</m.div>
				<m.div variants={Section} className="pb-12">
					<h3 className="font-sans text-white-dark2 text-2xl text-center">
						{t("Content.info")}
					</h3>
				</m.div>
				<m.div variants={Section}>
					<Link href="/" scroll={false}>
						<Button large>
							{t("Content.returnHome")} <House size={24} />
						</Button>
					</Link>
				</m.div>
			</m.div>
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
