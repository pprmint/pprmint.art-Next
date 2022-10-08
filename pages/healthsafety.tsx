import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Container, Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

import Head from "src/components/Head";
import Title from "src/components/Title";
import Link from "src/components/Link";
import Footer from "src/components/Footer";

import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function HealthSafety() {
	const t = useTranslations("HealthSafety");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="index.png"
			/>
			<Container>
				hiya
			</Container>
			<Footer />
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
