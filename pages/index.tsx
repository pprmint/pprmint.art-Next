import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { m } from "framer-motion";

import { ArrowRight } from "phosphor-react";

import Head from "components/Head";
import Button from "components/Button";

export default function Home() {
	const t = useTranslations("Home");
	return (
		<>
			<Head title={t("Head.title")} description={t("Head.description")} />
			<main className="h-screen w-screen flex items-end relative overflow-hidden">
				<video
					src="https://static.pprmint.art/videos/hero.mp4"
					autoPlay
					playsInline
					muted
					loop
					className="absolute w-full h-full object-cover"
				/>
				<div className="absolute flex items-center md:items-end gap-6 w-full p-6 md:p-9 flex-col md:flex-row text-center md:text-left">
					<div className="grow">
						<p
							className="text-3xl md:text-5xl text-white font-display font-semibold"
							dangerouslySetInnerHTML={{ __html: t.raw("Content.slogan") }}
						/>
					</div>
					<div>
						<Link href="/overview" scroll={false}>
							<Button large>
								{t("Content.button")} <ArrowRight />
							</Button>
						</Link>
					</div>
				</div>
			</main>
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
