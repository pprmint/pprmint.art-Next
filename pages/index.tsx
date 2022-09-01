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
		<PageTransition>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="index.png"
			/>
			<div style={{ scrollSnapType: "y mandatory" }}>
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
				<Box maxWidth="xl" margin="0 auto" sx={{ flexFlow: "column nowrap" }}>
					<ParallaxBanner
						layers={[
							{
								image: "/assets/home/motion/diamond.svg",
								translateX: [10, 10],
								translateY: [-10, 20],
								opacity: [0.5, 0.0],
							},
							{
								image: "/assets/home/motion/whateverthefuckthisis.svg",
								translateX: [-20, -20],
								translateY: [20, -20],
								opacity: [0.5, 0.0],
							},
							{
								image: "/assets/home/motion/rectangle.svg",
								translateX: [30, 30],
								translateY: [-30, 30],
								opacity: [0.5, 0.0],
							},
							{
								image: "/assets/home/motion/circle.svg",
								translateX: [-40, -40],
								translateY: [-40, 40],
								opacity: [0.5, 0.0],
							},
						]}
						style={{
							minHeight: "100vh",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							scrollSnapType: "y mandatory",
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
					</ParallaxBanner>
					<ParallaxBanner
						layers={[
							{
								image: "/assets/home/code/tags.svg",
								rotate: [-10, 10],
								opacity: [0.5, 0.0],
							},
							{
								image: "/assets/home/code/brackets.svg",
								rotate: [10, -10],
								opacity: [0.5, 0.0],
							},
						]}
						style={{
							minHeight: "100vh",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							scrollSnapType: "y mandatory",
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
							minHeight: "100vh",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							scrollSnapType: "y mandatory",
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
				</Box>
			</div>
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
