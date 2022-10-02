import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import {
	Container,
	Box,
	Button,
	Typography,
	Card,
	Grid,
	ButtonBase,
	CardContent,
	CardActions,
} from "@mui/material";
import { motion } from "framer-motion";

import Head from "src/components/Head";
import Title from "src/components/Title";
import Link from "src/components/Link";
import Footer from "src/components/Footer";

import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const ProjectGrid = [
	{ strings: "Mintcraft", path: "mintcraft" },
	{ strings: "StartMenuTiles", path: "startmenutiles" },
	{ strings: "Mintsans", path: "mintsans" },
	{ strings: "Mintbit", path: "mintbit" },
	{ strings: "MintAlt", path: "mintalt" },
];

// Props for animated download cards.
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
		opacity: 0,
		x: "20px",
		transition: { duration: 0.5, ease: "circOut" },
	},
	show: {
		opacity: 1,
		x: "0px",
		transition: {
			x: { duration: 0.5, ease: "circOut" },
			opacity: { duration: 0.2 },
		},
	},
};

function ProjectCard(props: { strings: string, path: string }) {
	const t = useTranslations("Projects");
	return (
		<Grid item xs={12} md={6} lg={4}>
			<motion.div variants={ProjectsItem}>
				<Card sx={{ width: "100%" }}>
					<CardContent>
						<Typography variant="h3">{t(props.strings + ".Head.title")}</Typography>
						<Typography variant="body2">{t(props.strings + ".Head.description")}</Typography>
					</CardContent>
					<CardActions>
						<Button variant="text" LinkComponent={Link} href={"/projects/"+props.path}>
							Go to page
						</Button>
					</CardActions>
				</Card>
			</motion.div>
		</Grid>
	);
}

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
			<Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
				<motion.div
					variants={ProjectsContainer}
					initial="hidden"
					animate="show"
				>
					<Grid container spacing={4}>
						{ProjectGrid.map((Project) => (
							<ProjectCard key={Project.path} strings={Project.strings} path={Project.path} />
						))}
					</Grid>
				</motion.div>
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
