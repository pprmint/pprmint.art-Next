import * as React from "react";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import {
	Container,
	Box,
	Button,
	Typography,
	ToggleButtonGroup,
	ToggleButton,
} from "@mui/material";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { AnimatePresence, motion } from "framer-motion";

import PageTransition from "src/components/PageTransition";
import Head from "src/components/Head";
import Title from "src/components/Title";
import Link from "src/components/Link";
import Footer from "src/components/Footer";

import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function Home() {
	const t = useTranslations("Home");
	return (
			<Box
				sx={{
					height: "100vh",
					overflowY: "auto",
					scrollSnapType: "y mandatory",
				}}
			>
				<Head
					title={t("Head.title")}
					description={t("Head.description")}
					ogImg="index.png"
				/>
				<Box sx={{ scrollSnapAlign: "start" }}>
					<Title
						big
						top={t("Title.top")}
						bottom={t("Title.bottom")}
						body={t("Title.description")}
						src="https://media.pprmint.art/code.jpg"
					>
						<Button
							variant="contained"
							component={Link}
							size="large"
							color="secondary"
							href="https://github.com/pprmint/pprmint.art-Next"
							target="_blank"
							rel="noopener noreferrer"
							startIcon={<SiGithub />}
							endIcon={<FiExternalLink />}
						>
							{t("Title.button")}
						</Button>
					</Title>
				</Box>
				<Box maxWidth="xl" margin="0 auto">
					<Container
						sx={{
							scrollSnapAlign: "start",
							minHeight: "100vh",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box textAlign="center" zIndex={1}>
							<Typography variant="h2">
								{t("Content.Motion.heading")}
							</Typography>
							<Typography variant="body1">
								{t("Content.Motion.text")}
							</Typography>
						</Box>
					</Container>
					<Container
						sx={{
							scrollSnapAlign: "start",
							minHeight: "100vh",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box textAlign="center" zIndex={1}>
							<Typography variant="h2">{t("Content.Code.heading")}</Typography>
							<Typography variant="body1">{t("Content.Code.text")}</Typography>
						</Box>
					</Container>
					<Container
						sx={{
							scrollSnapAlign: "start",
							minHeight: "100vh",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box textAlign="center" zIndex={1}>
							<Typography variant="h2">
								{t("Content.Illustration.heading")}
							</Typography>
							<Typography variant="body1">
								{t("Content.Illustration.text")}
							</Typography>
						</Box>
					</Container>
				</Box>
				<Box sx={{ scrollSnapAlign: "end" }}>
					<Footer />
				</Box>
			</Box>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
