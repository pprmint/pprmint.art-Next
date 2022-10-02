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
				<Grid container spacing={4} minHeight="100vh">
					<Grid item xs={12} md={6}>
						<Box
							sx={{
                                height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "baseline",
							}}
						>
							<Lottie loop={false} animationData={errorJson} play style={{maxHeight: 300}} />
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
                                height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "baseline",
							}}
						>
							<motion.div
								variants={AnimContainer}
								initial="hidden"
								animate="show"
							>
								<motion.div variants={Anim}>
									<Typography
										variant="h1"
										gutterBottom
										sx={{ textAlign: { xs: "center", md: "left" } }}
									>
										{t("title")}
									</Typography>
								</motion.div>
								<motion.div variants={Anim}>
									<Typography
										variant="h6"
										component="h2"
										color="text.secondary"
                                        gutterBottom
										sx={{ textAlign: { xs: "center", md: "left" } }}
									>
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
										mx={{ xs: "auto", md: "unset" }}
									>
										{t("button")}
									</Button>
								</motion.div>
							</motion.div>
						</Box>
					</Grid>
				</Grid>
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
