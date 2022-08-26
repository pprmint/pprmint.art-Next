import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import errorJson from "src/animations/error.json";

import Link from "src/components/Link";
import Head from "src/components/Head";
import Footer from "src/components/Footer";

// Container for staggered animations
const AnimContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.1,
		},
	},
};
// Container contents
const Anim = {
	hidden: {
		opacity: 0,
		y: "50px",
	},
	show: {
		opacity: 1,
		y: "0px",
		transition: {
            y: { duration: 1, ease: [0, 0, 0.2, 1] },
			opacity: { duration: 0.25 },
		},
	},
};

export default function NotFound() {
	const t = useTranslations("404");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("description")}
				ogImg="404.png"
				color="#ff3344"
			/>
			<Container maxWidth="lg">
				<Box
					sx={{
						minHeight: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Lottie
						loop={false}
						animationData={errorJson}
						play
						style={{ maxWidth: "700px", height: "auto" }}
					/>
					<motion.div
						variants={AnimContainer}
						initial="hidden"
						animate="show"
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<motion.div variants={Anim}>
							<Typography variant="h4" component="h1" align="center">
								{t("title")}
							</Typography>
						</motion.div>
						<motion.div variants={Anim}>
							<Typography gutterBottom align="center">
								{t("description")}
							</Typography>
						</motion.div>
						<motion.div variants={Anim}>
							<Button
								variant="outlined"
								color="error"
								component={Link}
								scroll={false}
								noLinkStyle
								href="/"
							>
								{t("button")}
							</Button>
						</motion.div>
					</motion.div>
				</Box>
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
