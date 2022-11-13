import Image from "next/image";
import Link from "next/link";
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
import { m } from "framer-motion";

import Head from "components/Head";
import Title from "components/Title";
import Footer from "components/Footer";
import { Masonry } from "@mui/lab";

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

function ProjectCard(props: { strings: string; path: string }) {
	const t = useTranslations("Projects");
	return (
		<m.div variants={ProjectsItem}>
			<Card>
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
						size="large"
						variant="text"
						LinkComponent={Link}
						href={"/projects/" + props.path}
					>
						Go to page
					</Button>
				</CardActions>
			</Card>
		</m.div>
	);
}

export default function Projects() {
	const t = useTranslations("Projects");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="projects.png"
			/>
			<Title top={t("Title.top")} bottom={t("Title.bottom")} />
			<Container>
				<m.div variants={ProjectsContainer} initial="hidden" animate="show">
					<Masonry
						spacing={4}
						columns={{ xs: 1, sm: 2, md: 3 }}
						sx={{ width: "unset" }}
					>
						{ProjectGrid.map((Project) => (
							<ProjectCard
								key={Project.path}
								strings={Project.strings}
								path={Project.path}
							/>
						))}
					</Masonry>
				</m.div>
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
