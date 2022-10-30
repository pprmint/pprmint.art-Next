import * as React from "react";
import Image from "next/image";
import Link from "next/link";
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
	Slider,
	Stack,
} from "@mui/material";
import { m } from "framer-motion";
import Masonry from "@mui/lab/Masonry";
import Head from "src/components/Head";
import Title from "src/components/Title";
import Footer from "src/components/Footer";

import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

// Tentative, will likely be replaced with something blog-like
const Works2022 = [
	{
		image: "https://media.pprmint.art/2022/Landscape/Landscape.png",
		path: "#",
		width: 1920,
		height: 1080,
	},
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

// Props for animated work images.
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
};

// Props for animated project cards.
const ProjectsContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.035,
		},
	},
};
const ProjectsItem = {
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
	const [columnSize, setColumnSize] = React.useState<
		number | string | Array<number | string>
	>(3);
	const handleSizeChange = (event: Event, newValue: number | number[]) => {
		setColumnSize(newValue);
	};
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="index.png"
			/>
			<Box sx={{ scrollSnapAlign: "start" }}>
				<Title big top={t("Title.top")} bottom={t("Title.bottom")}>
					<video
						src="https://media.pprmint.art/hero.mp4"
						width="100%"
						height="100%"
						style={{ objectFit: "cover" }}
						playsInline
						autoPlay
						muted
						loop
					/>
				</Title>
			</Box>
			<section>
				<Container>
					<Typography variant="h2">{t("Content.Featured.heading")}</Typography>
					<Typography gutterBottom>{t("Content.Featured.text")}</Typography>
				</Container>
				<m.div
					variants={ProjectsContainer}
					initial="hidden"
					whileInView="show"
				>
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
							<m.div key={Project.path} variants={ProjectsItem}>
								<ProjectCard
									key={Project.path}
									strings={Project.strings}
									path={Project.path}
								/>
							</m.div>
						))}
					</Box>
				</m.div>
			</section>
			<section>
				<Container>
					<Grid container spacing={2}>
						<Grid item xs={12} md={8}>
							<Typography variant="h2" gutterBottom>
								{t("Content.Works.heading")}2022
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography variant="overline">
								{t("Content.Works.Columns.description")}
							</Typography>
							<Slider
								aria-label={t("Content.Works.Columns.columns")}
								value={typeof columnSize === "number" ? columnSize : 0}
								valueLabelDisplay="auto"
								valueLabelFormat={
									columnSize + " " + t("Content.Works.Columns.columns")
								}
								onChange={handleSizeChange}
								min={1}
								max={12}
							/>
						</Grid>
					</Grid>
				</Container>
				<m.div variants={WorksContainer} initial="hidden" animate="show">
					<Box>
						<Masonry spacing={0} columns={columnSize}>
							{Works2022.map((Work) => (
								<m.div
									key={Work.image}
									variants={WorksItem}
									initial="hidden"
									whileInView="show"
								>
									<ButtonBase sx={{ width: "100%" }}>
										<Image
											src={Work.image}
											alt={Work.image}
											width={Work.width}
											height={Work.height}
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
										/>
									</ButtonBase>
								</m.div>
							))}
						</Masonry>
					</Box>
				</m.div>
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
