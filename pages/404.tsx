import Link from "next/link";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { m } from "framer-motion";

import Head from "components/Head";
import Button from "components/Button";
import { House } from "phosphor-react";

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

export default function NotFound() {
	const t = useTranslations("404");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.title")}
				ogImg="404.png"
				color="#1199ff"
			/>
			<m.div
				variants={SectionContainer}
				initial="hidden"
				animate="show"
				exit="exit"
				className="py-40 max-w-6xl h-screen px-6 mx-auto flex flex-col justify-center items-center"
			>
				<m.div variants={Section}>
					<h1 className="font-sans font-bold text-red text-9xl pb-2 text-center">
						404
					</h1>
				</m.div>
				<m.div variants={Section}>
					<h2 className="font-sans font-bold text-white text-6xl pb-2 text-center">
						{t("Content.notFound")}
					</h2>
				</m.div>
				<m.div variants={Section} className="pb-12">
					<h3 className="font-sans text-white-dark2 text-2xl text-center">
						{t("Content.info")}
					</h3>
				</m.div>
				<m.div variants={Section}>
					<Button href="/" large>
						{t("Content.returnHome")} <House size={24} />
					</Button>
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
