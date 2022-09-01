import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Container, Box, Button, Typography } from "@mui/material";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { motion } from "framer-motion";

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
		<PageTransition>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="index.png"
			/>
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
			<Container maxWidth="lg">
				<Typography variant="h2">{t("Content.About.heading")}</Typography>
				<Typography variant="body1">{t("Content.About.text")}</Typography>
			</Container>
			<br />
			<br />
			<ParallaxBanner
				layers={[
					{
						image: "/assets/home/motion/tracks.svg",
					},
					{
						image: "/assets/home/motion/diamond.svg",
						speed: -10,
					},
					{
						image: "/assets/home/motion/whateverthefuckthisis.svg",
						speed: 20,
					},
					{
						image: "/assets/home/motion/rectangle.svg",
						speed: 10,
					},
					{
						image: "/assets/home/motion/circle.svg",
						speed: -20,
					},
					{
						image: "/assets/home/gradient.svg",
					},
				]}
				style={{
					minHeight: 600,
					marginBottom: 64,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box textAlign="center" zIndex={1}>
					<Typography variant="h2">{t("Content.Motion.heading")}</Typography>
					<Typography variant="body1">{t("Content.Motion.text")}</Typography>
				</Box>
			</ParallaxBanner>
			<ParallaxBanner
				layers={[
					{
						image: "/assets/home/code/tags.svg",
						speed: -20,
						rotate: [-10, 10],
					},
					{
						image: "/assets/home/code/brackets.svg",
						speed: -20,
						rotate: [10, -10],
					},
					{
						image: "/assets/home/gradient.svg",
					},
				]}
				style={{
					minHeight: 600,
					marginBottom: 64,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box textAlign="center" zIndex={1}>
					<Typography variant="h2">{t("Content.Code.heading")}</Typography>
					<Typography variant="body1">{t("Content.Code.text")}</Typography>
				</Box>
			</ParallaxBanner>
			<ParallaxBanner
				layers={[
					{
						image: "/assets/home/gradient.svg",
					},
				]}
				style={{
					minHeight: 600,
					marginBottom: 64,
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
			</ParallaxBanner>
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
