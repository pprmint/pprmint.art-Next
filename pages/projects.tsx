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

export default function Projects() {
	const t = useTranslations("Projects");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="index.png"
			/>
			<Title top={t("Title.top")} bottom={t("Title.bottom")} />
			<Container sx={{ display: "flex", justifyContent: "center" }}>
				<Button
					variant="outlined"
					component={Link}
					scroll={false}
					noLinkStyle
					href="/projects/mintcraft"
				>
					Go to Mintcraft page
				</Button>
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