import Head from "src/components/Head";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import {
	Container,
	Box,
	Typography,
	Button,
	Divider,
	Grid,
} from "@mui/material";
import { motion } from "framer-motion";

import Title from "src/components/Title";
import Link from "src/components/Link";
import Footer from "src/components/Footer";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

// To be added: Function to reuse ribbons with texts as children

export default function Mintcraft() {
	const t = useTranslations("Project.Mintcraft");
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="mintcraft.png"
				favicon="mintcraft"
				color="#ffbb22"
			/>
			<Title top={t("Title.top")} bottom={t("Title.bottom")} />
			<ParallaxBanner
				layers={[
					{
						image: "/assets/mintcraft/furnace_bg.png",
						speed: -20,
						opacity: [0.75, 0.2],
						easing: "easeOutQuad",
					},
				]}
				style={{
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					overflow: "hidden",
				}}
			>
				<Container maxWidth="xl">
					<Grid container spacing={8}>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								zIndex: 2,
								textAlign: {
									md: "left",
									xs: "center",
								},
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Typography variant="h2">
								{t("Content.About.Dark.heading")}
							</Typography>
							<Typography>
								{t("Content.About.Dark.text1")}
								<br />
								{t("Content.About.Dark.text2")}
								<Link
									className="external"
									color="secondary"
									href="https://vanillatweaks.net/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Vanilla Tweaks
									<FiExternalLink />
								</Link>.
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							sx={{ zIndex: 1, display: "flex", justifyContent: "center" }}
						>
							<Parallax
								speed={10}
								rotate={[-10, 10]}
								easing="easeInQuad"
								style={{
									padding: "0 32px",
									filter: "drop-shadow(0 5px 10px #0005)",
								}}
							>
								<Image
									src="/assets/mintcraft/furnace.png"
									width="500px"
									height="500px"
								/>
							</Parallax>
						</Grid>
					</Grid>
				</Container>
			</ParallaxBanner>
			<ParallaxBanner
				layers={[
					{
						image: "/assets/mintcraft/beacon_bg.png",
						speed: -20,
						opacity: [0.75, 0.2],
						easing: "easeOutQuad",
					},
				]}
				style={{
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					overflow: "hidden",
				}}
			>
				<Container maxWidth="xl">
					<Grid container spacing={8}>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								zIndex: 2,
								textAlign: {
									md: "left",
									xs: "center",
								},
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Typography variant="h2">
								{t("Content.About.Consistent.heading")}
							</Typography>
							<Typography>{t("Content.About.Consistent.text")}</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							sx={{ zIndex: 1, display: "flex", justifyContent: "center" }}
						>
							<Parallax
								speed={10}
								rotate={[10, -10]}
								easing="easeInQuad"
								style={{
									padding: "0 32px",
									filter: "drop-shadow(0 5px 10px #0005)",
								}}
							>
								<Image
									src="/assets/mintcraft/beacon.png"
									width="500px"
									height="500px"
								/>
							</Parallax>
						</Grid>
					</Grid>
				</Container>
			</ParallaxBanner>
			<ParallaxBanner
				layers={[
					{
						image: "/assets/mintcraft/inventory_bg.png",
						speed: -20,
						opacity: [0.75, 0.2],
						easing: "easeOutQuad",
					},
				]}
				style={{
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					overflow: "hidden",
				}}
			>
				<Container maxWidth="xl">
					<Grid container spacing={8}>
						<Grid
							item
							xs={12}
							md={6}
							sx={{
								zIndex: 2,
								textAlign: {
									md: "left",
									xs: "center",
								},
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Typography variant="h2">
								{t("Content.About.Modern.heading")}
							</Typography>
							<Typography>
								{t.rich("Content.About.Modern.text", {
									small: (children) => (
										<span style={{ fontSize: "0.6rem" }}>{children}</span>
									),
								})}
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							sx={{ zIndex: 1, display: "flex", justifyContent: "center" }}
						>
							<Parallax
								speed={10}
								rotate={[-10, 10]}
								easing="easeInQuad"
								style={{
									padding: "0 32px",
									filter: "drop-shadow(0 5px 10px #0005)",
								}}
							>
								<Image
									src="/assets/mintcraft/inventory.png"
									width="1000px"
									height="500px"
								/>
							</Parallax>
						</Grid>
					</Grid>
				</Container>
			</ParallaxBanner>
			<Footer />
		</motion.div>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
