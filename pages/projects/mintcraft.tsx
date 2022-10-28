import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";
import { useLocale } from "next-intl";
import {
	Container,
	Box,
	Typography,
	Button,
	Divider,
	Grid,
	Card,
	CardContent,
	CardActions,
	ToggleButton,
	ToggleButtonGroup,
	CardMedia,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import Head from "src/components/Head";
import Title from "src/components/Title";
import Footer from "src/components/Footer";

import { FiExternalLink } from "react-icons/fi";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

// Props for animated download cards.
const DownloadContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.035,
		},
	},
};
const DownloadItem = {
	hidden: {
		opacity: 0,
		y: "20px",
		transition: { duration: 0.5, ease: "circOut" },
	},
	show: {
		opacity: 1,
		y: "0px",
		transition: {
			y: { duration: 0.5, ease: "circOut" },
			opacity: { duration: 0.2 },
		},
	},
	exit: {
		opacity: 0,
		y: "-20px",
		transition: { duration: 0.3, ease: "easeIn" },
	},
};

// Available downloads for each game version.
// Skip <type> prop for standalone pack.
// "Full" for FullSauce / complete pack with all add-ons integrated.
// "Add-on" for... well, an add-on.
const v119 = [
	{
		name: "Mintcraft",
		packVersion: "1.6.1",
		type: "Full",
	},
	{
		name: "Mintcraft",
		packVersion: "1.6.1",
	},
	{
		name: "MintBit",
		packVersion: "1.0",
		type: "Add-on",
	},
	{
		name: "Sounds",
		packVersion: "1.1",
		type: "Add-on",
	},
];
const v118 = [
	{
		name: "Mintcraft",
		packVersion: "1.5",
	},
	{
		name: "MintBit",
		packVersion: "1.0",
		type: "Add-on",
	},
	{
		name: "Sounds",
		packVersion: "1.1",
		type: "Add-on",
	},
];
const v117 = [
	{
		name: "Mintcraft",
		packVersion: "1.3",
	},
	{
		name: "MintBit",
		packVersion: "1.0",
		type: "Add-on",
	},
	{
		name: "Sounds",
		packVersion: "1.0",
		type: "Add-on",
	},
];
const v116 = [
	{
		name: "Mintcraft",
		packVersion: "1.1",
	},
	{
		name: "MintBit",
		packVersion: "1.0",
		type: "Add-on",
	},
	{
		name: "Sounds",
		packVersion: "1.0",
		type: "Add-on",
	},
];

export default function Mintcraft() {
	const t = useTranslations("Projects.Mintcraft");
	const locale = useLocale();

	// Game version switcher
	const [gameVersion, setGameVersion] = React.useState("1.19");
	const handleGameVersion = (
		event: React.MouseEvent<HTMLElement>,
		newGameVersion: string | null
	) => {
		// Always keep just one version selected.
		if (newGameVersion !== null) {
			setGameVersion(newGameVersion);
		}
	};

	// Numbers go boing when switching versions.
	function GameVersionHeading() {
		return (
			<Typography variant="h2">
				{t("Content.Download.commonTitle")}
				&nbsp;
				<motion.div
					initial={{ y: "-20px" }}
					animate={{ y: "0px" }}
					style={{ display: "inline-block" }}
				>
					{gameVersion}
				</motion.div>
			</Typography>
		);
	}

	function DownloadCard(
		props: React.PropsWithChildren<{
			name: string;
			packVersion: string;
			type?: string;
		}>
	) {
		const t = useTranslations("Projects.Mintcraft.Content.Download");

		function DownloadButton() {
			// I'm too lazy to define download links manually, so here the filename will be changed based on the type prop.
			if (props.type === "Add-on") {
				return (
					<Button
						color="warning"
						component={Link}
						size="small"
						sx={{ mx: "auto" }}
						href={
							"https://download.pprmint.art/mintcraft/" +
							gameVersion +
							"/" +
							props.name +
							"_Add-on_" +
							props.packVersion +
							"_(" +
							gameVersion +
							").zip"
						}
					>
						{t("download")}
					</Button>
				);
			}
			if (props.type === "Full") {
				return (
					<Button
						color="warning"
						component={Link}
						size="small"
						sx={{ mx: "auto" }}
						href={
							"https://download.pprmint.art/mintcraft/" +
							gameVersion +
							"/" +
							props.name +
							"_" +
							props.packVersion +
							"_(FullSauce_" +
							gameVersion +
							").zip"
						}
					>
						{t("download")}
					</Button>
				);
			} else {
				return (
					<Button
						color="warning"
						component={Link}
						size="small"
						sx={{ mx: "auto" }}
						href={
							"https://download.pprmint.art/mintcraft/" +
							gameVersion +
							"/" +
							props.name +
							"_" +
							props.packVersion +
							"_(" +
							gameVersion +
							").zip"
						}
					>
						{t("download")}
					</Button>
				);
			}
		}

		return (
			<Grid item xs={6} sm={4} lg={3}>
				<motion.div variants={DownloadItem}>
					<Card>
						<CardMedia
							component="img"
							image={"/assets/mintcraft/packs/" + props.name + "/pack.svg"}
						/>
						<CardContent>
							<Typography variant="h4" component="h3">
								{props.type === "Full" ? props.name + " FullSauce" : props.name}
								.
							</Typography>
							<Typography variant="body2">
								Version {props.packVersion}
							</Typography>
						</CardContent>
						<Divider />
						<CardActions>
							<DownloadButton />
						</CardActions>
					</Card>
				</motion.div>
			</Grid>
		);
	}

	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="mintcraft.png"
				favicon="mintcraft"
				color="#ffbb22"
			/>
			<Title top={t("Title.top")} bottom={t("Title.bottom")} />
			<section id="bold_claims">
				<ParallaxBanner
					layers={[
						{
							image: "/assets/mintcraft/" + locale + "/furnace_bg.png",
							speed: -20,
							opacity: [0.75, 0.2],
							easing: "easeOutQuad",
						},
					]}
					style={{
						minHeight: "80vh",
						display: "flex",
						alignItems: "center",
						overflow: "hidden",
					}}
				>
					<Container>
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
									</Link>
									.
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
									<motion.div
										initial={{ opacity: 0, x: 50 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 1, ease: "circOut" }}
									>
										<Image
											alt={t("Content.About.Dark.imgAlt")}
											src={"/assets/mintcraft/" + locale + "/furnace.png"}
											width={500}
											height={500}
										/>
									</motion.div>
								</Parallax>
							</Grid>
						</Grid>
					</Container>
				</ParallaxBanner>
				<ParallaxBanner
					layers={[
						{
							image: "/assets/mintcraft/" + locale + "/beacon_bg.png",
							speed: -20,
							opacity: [0.75, 0.2],
							easing: "easeOutQuad",
						},
					]}
					style={{
						minHeight: "80vh",
						display: "flex",
						alignItems: "center",
						overflow: "hidden",
					}}
				>
					<Container>
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
									<motion.div
										initial={{ opacity: 0, x: 50 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 1, ease: "circOut" }}
									>
										<Image
											alt={t("Content.About.Consistent.imgAlt")}
											src={"/assets/mintcraft/" + locale + "/beacon.png"}
											width={500}
											height={500}
										/>
									</motion.div>
								</Parallax>
							</Grid>
						</Grid>
					</Container>
				</ParallaxBanner>
				<ParallaxBanner
					layers={[
						{
							image: "/assets/mintcraft/" + locale + "/inventory_bg.png",
							speed: -20,
							opacity: [0.75, 0.2],
							easing: "easeOutQuad",
						},
					]}
					style={{
						minHeight: "80vh",
						display: "flex",
						alignItems: "center",
						overflow: "hidden",
					}}
				>
					<Container>
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
									<motion.div
										initial={{ opacity: 0, x: 50 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 1, ease: "circOut" }}
									>
										<Image
											alt={t("Content.About.Modern.imgAlt")}
											src={"/assets/mintcraft/" + locale + "/inventory.png"}
											width={1000}
											height={500}
										/>
									</motion.div>
								</Parallax>
							</Grid>
						</Grid>
					</Container>
				</ParallaxBanner>
			</section>
			<section id="downloads">
				<Container
					sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
				>
					<Box
						sx={{
							display: { md: "none", xs: "flex" },
							flexDirection: "column",
						}}
					>
						<Typography variant="overline">
							{t("Content.Download.selectVersion")}
						</Typography>
						<ToggleButtonGroup
							color="warning"
							value={gameVersion}
							exclusive
							onChange={handleGameVersion}
							aria-label="game version"
						>
							<ToggleButton value="1.19">1.19</ToggleButton>
							<ToggleButton value="1.18">1.18</ToggleButton>
							<ToggleButton value="1.17">1.17</ToggleButton>
							<ToggleButton value="1.16">1.16</ToggleButton>
						</ToggleButtonGroup>
						<br />
					</Box>
					<Box sx={{ flexGrow: 1 }}>
						<GameVersionHeading />
					</Box>
					<Box
						sx={{
							display: { md: "flex", xs: "none" },
							flexDirection: "column",
							textAlign: "right",
						}}
					>
						<Typography variant="overline">
							{t("Content.Download.selectVersion")}
						</Typography>
						<ToggleButtonGroup
							color="warning"
							value={gameVersion}
							exclusive
							onChange={handleGameVersion}
							aria-label="game version"
						>
							<ToggleButton value="1.19">1.19</ToggleButton>
							<ToggleButton value="1.18">1.18</ToggleButton>
							<ToggleButton value="1.17">1.17</ToggleButton>
							<ToggleButton value="1.16">1.16</ToggleButton>
						</ToggleButtonGroup>
					</Box>
				</Container>
				<br />
				<Container sx={{ minHeight: "60vh" }}>
					<AnimatePresence exitBeforeEnter>
						{/* 1.19 */}
						{gameVersion === "1.19" && (
							<motion.div
								key={gameVersion}
								variants={DownloadContainer}
								initial="hidden"
								animate="show"
								exit="exit"
							>
								<Grid container spacing={4}>
									{v119.map((item, index) => (
										<DownloadCard
											key={index}
											name={item.name}
											packVersion={item.packVersion}
											type={item.type}
										/>
									))}
								</Grid>
							</motion.div>
						)}
						{/* 1.18 */}
						{gameVersion === "1.18" && (
							<motion.div
								key={gameVersion}
								variants={DownloadContainer}
								initial="hidden"
								animate="show"
								exit="exit"
							>
								<Grid container spacing={4}>
									{v118.map((item, index) => (
										<DownloadCard
											key={index}
											name={item.name}
											packVersion={item.packVersion}
											type={item.type}
										/>
									))}
								</Grid>
							</motion.div>
						)}
						{/* 1.17 */}
						{gameVersion === "1.17" && (
							<motion.div
								key={gameVersion}
								variants={DownloadContainer}
								initial="hidden"
								animate="show"
								exit="exit"
							>
								<Grid container spacing={4}>
									{v117.map((item, index) => (
										<DownloadCard
											key={index}
											name={item.name}
											packVersion={item.packVersion}
											type={item.type}
										/>
									))}
								</Grid>
							</motion.div>
						)}
						{/* 1.16 */}
						{gameVersion === "1.16" && (
							<motion.div
								key={gameVersion}
								variants={DownloadContainer}
								initial="hidden"
								animate="show"
								exit="exit"
							>
								<Grid container spacing={4}>
									{v116.map((item, index) => (
										<DownloadCard
											key={index}
											name={item.name}
											packVersion={item.packVersion}
											type={item.type}
										/>
									))}
								</Grid>
							</motion.div>
						)}
					</AnimatePresence>
				</Container>
			</section>
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
