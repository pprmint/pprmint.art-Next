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

import { Motion, Code, Vector } from "src/components/backgrounds";

const TextCont = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.075,
		},
	},
};
const Text = {
	hidden: { opacity: 0, y: "50px" },
	show: {
		opacity: 1,
		y: "0px",
		transition: { duration: 0.75, ease: "circOut" },
	},
};

function PageScrollCont(props: React.PropsWithChildren) {
	return (
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
			{props.children}
		</Box>
	);
}

export default function Home() {
	const t = useTranslations("Home");
	return (
		<Box
			sx={{
				height: { xs: "100vh", sm: "unset" },
				overflowY: { xs: "auto", sm: "unset" },
				overflowX: { xs: "hidden" },
				scrollSnapType: { xs: "y mandatory", sm: "none" },
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
            {/* Vector stuff */}
            <PageScrollCont>
				<Container
					sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
				>
					<motion.div variants={TextCont} initial="hidden" whileInView="show">
						<motion.div variants={Text}>
							<Typography variant="h2">
								{t("Content.Illustration.heading")}
							</Typography>
						</motion.div>
						<motion.div variants={Text}>
							<Typography
								variant="body1"
								dangerouslySetInnerHTML={{
									__html: t.raw("Content.Illustration.text"),
								}}
							/>
						</motion.div>
					</motion.div>
				</Container>
				<Vector />
			</PageScrollCont>
            {/* Motion design */}
			<PageScrollCont>
				<Container
					sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
				>
					<motion.div variants={TextCont} initial="hidden" whileInView="show">
						<motion.div variants={Text}>
							<Typography variant="h2">
								{t("Content.Motion.heading")}
							</Typography>
						</motion.div>
						<motion.div variants={Text}>
							<Typography variant="body1">
								{t("Content.Motion.text")}
							</Typography>
						</motion.div>
					</motion.div>
				</Container>
				<Motion />
			</PageScrollCont>
			{/* Code */}
            <PageScrollCont>
				<Container
					sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
				>
					<motion.div variants={TextCont} initial="hidden" whileInView="show">
						<motion.div variants={Text}>
							<Typography variant="h2">{t("Content.Code.heading")}</Typography>
						</motion.div>
						<motion.div variants={Text}>
							<Typography
								variant="body1"
								dangerouslySetInnerHTML={{ __html: t.raw("Content.Code.text") }}
							/>
						</motion.div>
					</motion.div>
				</Container>
				<Code />
			</PageScrollCont>
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
