import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Container, Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

import PageTransition from "src/components/PageTransition";
import Head from "src/components/Head";
import Title from "src/components/Title";
import Footer from "src/components/Footer";

export default function Gallery() {
	const t = useTranslations("Gallery");
	return (
		<PageTransition>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="index.png"
			/>
			<Title top={t("Title.top")} bottom={t("Title.bottom")} />
			<Footer />
		</PageTransition>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
