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
	Grid,
	Card,
	CardContent,
	CardActions,
	CardMedia,
	ButtonBase,
} from "@mui/material";
import { motion } from "framer-motion";
import Masonry from "@mui/lab/Masonry";
import Head from "src/components/Head";
import Title from "src/components/Title";
import Link from "src/components/Link";
import Footer from "src/components/Footer";

import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

// Tentative, will likely be replaced with something blog-like
const Works2022 = [
	{
		image: "https://media.pprmint.art/2022/Pimples/Confusing_POST.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/Pyramid/pyramid.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/Platonic/platonic_edit_mirrored.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/Nextjs/NextJS.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/What/whatb.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/SolarSystem/Solar_System_2.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/Flap/Flap.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/Swirl/Swirl_1080p_E.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/Lights/N-720.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/Book/Cover-720.png",
		path: "#",
		width: 2481,
		height: 3508,
	},
	{
		image: "https://media.pprmint.art/2022/MintBanners/MINT_Night-720.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/WiiRemake/WiiRemake-720.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/Geoices/geoballs-720.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/SUSE/suse-720.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/Statistics/statistics-720.png",
		path: "#",
		width: 2000,
		height: 2000,
	},
	{
		image: "https://media.pprmint.art/2022/iPad/iPad-720.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/ArchWall/Arch_Qogir-720.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
	{
		image: "https://media.pprmint.art/2022/Ford/Ford-720.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
];

const ProjectGrid = [
	{ strings: "Mintcraft", path: "mintcraft" },
	{ strings: "StartMenuTiles", path: "startmenutiles" },
	{ strings: "Mintsans", path: "mintsans" },
	{ strings: "Mintbit", path: "mintbit" },
	{ strings: "MintAlt", path: "mintalt" },
];

// Props for animated download cards.
const WorksContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.035,
		},
	},
};
const WorksItem = {
	hidden: {
		boxShadow: "0 0 0px #0000",
		opacity: 0,
		y: "20px",
		transition: { duration: 0.5, ease: "circOut" },
	},
	show: {
		opacity: 1,
		y: "0px",
		zIndex: 0,
		transition: {
			y: { duration: 0.5, ease: "circOut" },
			opacity: { duration: 0.2 },
		},
	},
	hovered: {
		boxShadow: "0 0 20px #0005",
		scale: 1.05,
		zIndex: 1,
		transition: {
			duration: 0.5,
			ease: "circOut",
		},
	},
};

function ProjectCard(props: { strings: string; path: string }) {
	const t = useTranslations("Projects");
	return (
		<Box>
			<Card sx={{ width: "33vw", maxWidth: 550, minWidth: 250 }}>
				<CardMedia component="img" src="https://media.pprmint.art/test.png" />
				<CardContent>
					<Typography variant="h3">
						{t(props.strings + ".Head.title")}
					</Typography>
					<Typography variant="body2">
						{t(props.strings + ".Head.description")}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						variant="text"
						LinkComponent={Link}
						href={"/projects/" + props.path}
					>
						Go to page
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
}

export default function Home() {
	const t = useTranslations("Home");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="index.png"
			/>
			<Box sx={{ scrollSnapAlign: "start" }}>
				<Title
					big
					selection="blue"
					top={t("Title.top")}
					bottom={t("Title.bottom")}
					body={t("Title.description")}
					src="https://media.pprmint.art/Next_js.png"
				>
					<Button
						variant="outlined"
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
			<section>
				<Container>
					<Typography variant="h2">{t("Content.Featured.heading")}</Typography>
					<Typography>{t("Content.Featured.text")}</Typography>
				</Container>
				<Box
					sx={{
						display: "flex",
						gap: 3,
						p: { xs: 2, sm: 3 },
						overflow: "auto",
						width: "100%",
						scrollSnapType: "x mandatory",
						scrollbarWidth: "none",
						"& > *": {
							scrollSnapAlign: "center",
						},
						"::-webkit-scrollbar": { display: "none" },
					}}
				>
					{ProjectGrid.map((Project) => (
						<ProjectCard
							key={Project.path}
							strings={Project.strings}
							path={Project.path}
						/>
					))}
				</Box>
			</section>
			<motion.div variants={WorksContainer} initial="hidden" animate="show">
				<Masonry columns={{ xs: 2, md: 3 }} spacing={0}>
					{Works2022.map((Work) => (
						<motion.div
							key={Work.image}
							variants={WorksItem}
							initial="hidden"
							whileInView="show"
							whileHover="hovered"
						>
							<ButtonBase>
								<Box lineHeight={0}>
									<Image
										src={Work.image}
										layout="intrinsic"
										width={Work.width}
										height={Work.height}
									/>
								</Box>
							</ButtonBase>
						</motion.div>
					))}
				</Masonry>
			</motion.div>
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
