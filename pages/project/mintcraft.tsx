import * as React from "react";
import Head from "src/components/Head";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
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
} from "@mui/material";
import { motion } from "framer-motion";

import Title from "src/components/Title";
import Link from "src/components/Link";
import Footer from "src/components/Footer";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const DownloadContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
            duration: 0,
			staggerChildren: 0.05,
		},
	},
};

const DownloadItem = {
	hidden: { opacity: 0, y: "20px", transition: {duration: 0.5, ease: "circOut"}},
	show: { opacity: 1, y: "0px", transition: {duration: 0.5, ease: "circOut"}},
};

const v119 = [
	{
		name: "Mintcraft",
		link: "https://download.pprmint.art/mintcraft/1.19/Mintcraft_1.6_(1.19).zip",
	},
	{
		name: "Mintcraft",
		link: "https://download.pprmint.art/mintcraft/1.19/Mintcraft_1.6_(1.19).zip",
	},
	{
		name: "Mintcraft",
		link: "https://download.pprmint.art/mintcraft/1.19/Mintcraft_1.6_(1.19).zip",
	},
	{
		name: "Mintcraft",
		link: "https://download.pprmint.art/mintcraft/1.19/Mintcraft_1.6_(1.19).zip",
	},
];
const v118 = [
	{
		name: "Mintcraft",
		link: "https://download.pprmint.art/mintcraft/1.18/Mintcraft_1.5_(1.18).zip",
	},
	{
		name: "Mintcraft",
		link: "https://download.pprmint.art/mintcraft/1.18/Mintcraft_1.5_(1.18).zip",
	},
];

export default function Mintcraft() {
	const t = useTranslations("Project.Mintcraft");
	const locale = useLocale();

	const [version, setVersion] = React.useState("1.19");
	const handleVersion = (
		event: React.MouseEvent<HTMLElement>,
		newVersion: string | null
	) => {
		if (newVersion !== null) {
			setVersion(newVersion);
		}
	};

	function VersionHeading() {
		return (
			<Typography variant="h2">
				{t("Content.Download.commonTitle")}
				&nbsp;
				<motion.div
					initial={{ y: "-20px" }}
					animate={{ y: "0px" }}
					style={{ display: "inline-block" }}
				>
					{version}
				</motion.div>
			</Typography>
		);
	}

	function VersionSwitch() {
		return (
			<>
				<Typography variant="overline">
					{t("Content.Download.selectVersion")}
				</Typography>
				<br />
				<ToggleButtonGroup
					color="warning"
					value={version}
					exclusive
					onChange={handleVersion}
					aria-label="game version"
				>
					<ToggleButton value="1.19">1.19</ToggleButton>
					<ToggleButton value="1.18">1.18</ToggleButton>
					<ToggleButton value="1.17">1.17</ToggleButton>
					<ToggleButton value="1.16">1.16</ToggleButton>
				</ToggleButtonGroup>
				<br />
			</>
		);
	}

	function DownloadCard(
		props: React.PropsWithChildren<{
			name: string;
			version: string; // Game version, without dot
			link: string;
		}>
	) {
		const t = useTranslations("Project.Mintcraft.Content.Download");
		return (
			<Grid item xs={6} sm={4} lg={3}>
				<motion.div variants={DownloadItem}>
					<Card>
						<img src={"/assets/mintcraft/packs/" + props.name + "/pack.svg"} />
						<CardContent sx={{ pt: 0 }}>
							<Typography variant="h4" component="h3">
								{props.name}.
							</Typography>
							<Typography variant="body2">
								{t(props.version + "." + props.name + ".text")}
							</Typography>
						</CardContent>
						<Divider />
						<CardActions>
							<Button
								color="warning"
								component={Link}
								size="small"
								sx={{ mx: "auto" }}
								href={props.link}
							>
								{t("download")}
							</Button>
						</CardActions>
					</Card>
				</motion.div>
			</Grid>
		);
	}

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
			<div className="section" id="bold_claims">
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
									<Image
										src={"/assets/mintcraft/" + locale + "/furnace.png"}
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
										src={"/assets/mintcraft/" + locale + "/beacon.png"}
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
										src={"/assets/mintcraft/" + locale + "/inventory.png"}
										width="1000px"
										height="500px"
									/>
								</Parallax>
							</Grid>
						</Grid>
					</Container>
				</ParallaxBanner>
			</div>
			<div className="section" id="downloads">
				<Container
					sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
				>
					<Box
						sx={{
							display: { md: "none", xs: "flex" },
							flexDirection: "column",
						}}
					>
						<VersionSwitch />
					</Box>
					<Box sx={{ flexGrow: 1 }}>
						<VersionHeading />
					</Box>
					<Box
						sx={{
							display: { md: "flex", xs: "none" },
							flexDirection: "column",
							textAlign: "right",
						}}
					>
						<VersionSwitch />
					</Box>
				</Container>
				<br />
				<Container sx={{ minHeight: "60vh" }}>
					{version === "1.19" && (
						<motion.div
							variants={DownloadContainer}
							initial="hidden"
							animate="show"
						>
							<Grid container spacing={4}>
								{v119.map((item, index) => (
									<DownloadCard
										key={index}
										name={item.name}
										version="119"
										link={item.link}
									/>
								))}
							</Grid>
						</motion.div>
					)}
					{version === "1.18" && (
						<motion.div
							variants={DownloadContainer}
							initial="hidden"
							animate="show"
						>
							<Grid container spacing={4}>
								{v118.map((item, index) => (
									<DownloadCard
										key={index}
										name={item.name}
										version="118"
										link={item.link}
									/>
								))}
							</Grid>
						</motion.div>
					)}
				</Container>
			</div>
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
