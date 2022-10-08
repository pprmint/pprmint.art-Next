import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
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
		x: "50px",
	},
	show: {
		opacity: 1,
		x: "0px",
		transition: {
			x: { duration: 1, ease: [0, 0, 0.2, 1] },
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
			<Container maxWidth="xl">
				<Box
					className="selection red"
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
						style={{ maxHeight: 404 }}
					/>
					<motion.div variants={AnimContainer} initial="hidden" animate="show">
						<motion.div variants={Anim}>
							<Typography variant="h1" textAlign="center" gutterBottom>
								{t("title")}
							</Typography>
						</motion.div>
						<motion.div variants={Anim}>
							<Typography
								variant="h6"
								component="h2"
								color="text.secondary"
								textAlign="center"
								gutterBottom
							>
								{t("description")}
							</Typography>
						</motion.div>
						<motion.div variants={Anim}>
							<Box width="max-content" mx="auto">
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
							</Box>
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
