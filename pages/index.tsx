import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { m } from "framer-motion";

import Head from "components/Head";
import Button from "components/Button";
import Title from "components/Title";
import Footer from "components/Footer";

import backgroundImage from "public/assets/background.svg";

import { ArrowRight } from "@carbon/icons-react";

const ColumnContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.1,
		},
	},
};
const Column = {
	hidden: {
		y: 100,
	},
	show: {
		y: 0,
		transition: {
			y: { duration: 0.75, ease: "circOut" },
			opacity: { duration: 0.25 },
		},
	},
	exit: {
		y: -100,
		transition: { duration: 0.3, ease: "easeIn" },
	},
};

export default function Home() {
	const t = useTranslations("Home");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="index.png"
			/>
			<m.div
				variants={ColumnContainer}
				initial="hidden"
				animate="show"
				exit="exit"
				className="h-screen w-screen flex items-end relative overflow-hidden"
			>
				<Image
					src={backgroundImage}
					fill
					alt="Dotted background"
					className="z-0 object-cover"
				/>
				<div className="absolute flex items-end gap-6 w-full p-12">
					<m.div variants={Column} className="grow">
						<p
							className="font-sans text-5xl text-white font-bold"
							dangerouslySetInnerHTML={{ __html: t.raw("Title.slogan") }}
						/>
					</m.div>
					<m.div variants={Column}>
						<Button href="/overview" large>
							{t("Title.button")} <ArrowRight size={24} />
						</Button>
					</m.div>
				</div>
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
