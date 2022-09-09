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
import { motion } from "framer-motion";

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
				overflowX: "hidden",
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
			<Box
				sx={{
					position: "relative",
					scrollSnapAlign: "start",
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Container
					sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
				>
					<Typography variant="h2">{t("Content.Motion.heading")}</Typography>
					<Typography variant="body1">{t("Content.Motion.text")}</Typography>
				</Container>
				<Box
					position="absolute"
					width="100vw"
					height="100vh"
					overflow="hidden"
					sx={{ opacity: 0.5 }}
				>
					<motion.div
						animate={{ y: [0, -150, 0], x: [0, 100, 0] }}
						transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
						style={{
							position: "absolute",
							bottom: -250,
							right: -250,
							rotate: 34,
						}}
					>
						<Image
							src="/assets/home/motion/circle.svg"
							width={1000}
							height={1000}
							alt=""
							layout="fixed"
						/>
					</motion.div>
					<motion.div
						animate={{ y: [-150, 0, -150], x: [100, 0, 100] }}
						transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
						style={{
							position: "absolute",
							bottom: -350,
							right: -350,
							rotate: 34,
						}}
					>
						<Image
							src="/assets/home/motion/rectangle.svg"
							width={1000}
							height={1000}
							alt=""
							layout="fixed"
						/>
					</motion.div>
					<motion.div
						animate={{ y: [0, -150, 0], x: [0, 100, 0] }}
						transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
						style={{
							position: "absolute",
							top: -250,
							left: -450,
							rotate: 34,
						}}
					>
						<Image
							src="/assets/home/motion/whateverthefuckthisis.svg"
							width={1000}
							height={1000}
							alt=""
							layout="fixed"
						/>
					</motion.div>
					<motion.div
						animate={{ y: [-150, 0, -150], x: [100, 0, 100] }}
						transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
						style={{
							position: "absolute",
							top: -150,
							left: -350,
							rotate: 34,
						}}
					>
						<Image
							src="/assets/home/motion/diamond.svg"
							width={1000}
							height={1000}
							alt=""
							layout="fixed"
						/>
					</motion.div>
				</Box>
			</Box>
			<Box
				sx={{
					position: "relative",
					scrollSnapAlign: "start",
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Container
					sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
				>
					<Typography variant="h2">{t("Content.Code.heading")}</Typography>
					<Typography
						variant="body1"
						dangerouslySetInnerHTML={{ __html: t.raw("Content.Code.text") }}
					/>
				</Container>
				<Box
					position="absolute"
					width="100vw"
					height="100vh"
					overflow="hidden"
					sx={{ opacity: 0.5 }}
				>
					<motion.div
						animate={{ rotate: [0, -360] }}
						transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
						style={{
							position: "absolute",
							top: -250,
							left: -550,
						}}
					>
						<Image
							src="/assets/home/code/tags.svg"
							width={900}
							height={900}
							alt=""
							layout="fixed"
						/>
					</motion.div>
					<motion.div
						animate={{ rotate: [0, 360] }}
						transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
						style={{
							position: "absolute",
							top: -250,
							left: -550,
						}}
					>
						<Image
							src="/assets/home/code/brackets.svg"
							width={900}
							height={900}
							alt=""
							layout="fixed"
						/>
					</motion.div>
					<motion.div
						animate={{ y: [0, 150, 0], x: [0, -50, 0] }}
						transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
						style={{
							position: "absolute",
							bottom: -50,
							right: -50,
                            rotate: 10,
						}}
					>
						<Image
							src="/assets/home/code/semicolon.svg"
							width={207}
							height={770}
							alt=""
							layout="fixed"
						/>
					</motion.div>
				</Box>
			</Box>
			<Box
				sx={{
					scrollSnapAlign: "start",
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Container sx={{ textAlign: "center", position: "relative" }}>
					<Typography variant="h2">
						{t("Content.Illustration.heading")}
					</Typography>
					<Typography variant="body1">
						{t("Content.Illustration.text")}
					</Typography>
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
