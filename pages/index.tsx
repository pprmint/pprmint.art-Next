import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { m } from "framer-motion";

import { ArrowRight } from "phosphor-react";

import Head from "components/Head";
import Button from "components/Button";

import { SectionContainer, Section } from "animations/sectionAnimations";

export default function Home() {
	const t = useTranslations("Home");
	return (
		<>
			<Head title={t("Head.title")} description={t("Head.description")} />
			<m.div
				variants={SectionContainer}
				initial="hidden"
				animate="show"
				exit="exit"
				className="h-screen w-screen flex items-end relative overflow-hidden"
			>
				<video
					src="https://static.pprmint.art/videos/hero.mp4"
					autoPlay
					playsInline
					muted
					loop
					className="absolute w-full h-full object-cover"
				/>
				<div className="absolute flex items-center md:items-end gap-6 w-full p-6 md:p-9 flex-col md:flex-row text-center md:text-left">
					<m.div variants={Section} className="grow">
						<p
							className="font-sans text-4xl md:text-5xl text-white font-bold"
							dangerouslySetInnerHTML={{ __html: t.raw("Content.slogan") }}
						/>
					</m.div>
					<m.div variants={Section}>
						<Link href="/overview" scroll={false}>
							<Button large>
								{t("Content.button")} <ArrowRight />
							</Button>
						</Link>
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
