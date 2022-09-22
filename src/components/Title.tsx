import { GetStaticPropsContext } from "next";
import { Typography, Container, Box, Grid } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowDownward } from "@mui/icons-material";
import {
	Parallax,
	ParallaxBanner,
	ParallaxBannerLayer,
} from "react-scroll-parallax";

// Container for staggered animations
const TextContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.075,
		},
	},
};
// Container contents
const Text = {
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

export default function Title(
	props: React.PropsWithChildren<{
		top: string;
		bottom: string;
		big?: boolean;
		selection?: string;
		body?: string;
		src?: string;
		topLevel?: string;
	}>
) {
	const t = useTranslations("Title");
	if (props.big) {
		return (
			<>
				<style jsx>{`
					@keyframes background {
						from {
							filter: blur(5px);
							opacity: 0;
							scale: 1.1;
						}
						50% {
							opacity: 0.5;
						}
						to {
							filter: blur(0px);
							opacity: 0.5;
							scale: 1;
						}
					}
				`}</style>
				<Box
					className={props.selection && "selection " + props.selection}
					style={{
						position: "relative",
						minHeight: "100vh",
						display: "flex",
						alignItems: "center",
						overflow: "hidden",
					}}
				>
					{props.src && (
						<Image
							src={props.src}
							layout="fill"
							objectFit="cover"
							alt=""
							quality={100}
							style={{
								zIndex: -1,
								animation: "background 5s cubic-bezier(0.4, 0, 0.2, 1)",
								opacity: 0.5,
							}}
						/>
					)}
					<Container maxWidth="xl">
						<motion.div
							variants={TextContainer}
							initial="hidden"
							whileInView="show"
						>
							<Grid
								container
								spacing={{ xs: 2, lg: 8 }}
								sx={{ alignItems: "center" }}
							>
								<Grid item xs={12} lg={6}>
									<motion.div variants={Text}>
										<Typography
											variant="h1"
											gutterBottom
											textAlign={{ xs: "center", lg: "right" }}
											sx={{
												lineHeight: 0.75,
												textShadow: "0 4px 10px #1115",
											}}
										>
											{props.top}
										</Typography>
									</motion.div>
									<motion.div variants={Text}>
										<Typography
											color="text.secondary"
											textAlign={{ xs: "center", lg: "right" }}
											sx={{
												textShadow: "0 4px 10px #1115",
												lineHeight: 1.2,
												marginBottom: "8px",
												fontWeight: 300,
												fontStyle: "italic",
												fontSize: "2rem",
											}}
										>
											{props.bottom}
										</Typography>
									</motion.div>
								</Grid>
								<Grid item xs={12} lg={6}>
									<motion.div variants={Text}>
										<Typography
											variant="body1"
											textAlign={{ xs: "center", lg: "left" }}
											gutterBottom
										>
											{props.body}
										</Typography>
									</motion.div>
									<motion.div variants={Text}>
										<Box
											sx={{
												display: "flex",
												justifyContent: { xs: "center", lg: "left" },
											}}
										>
											{props.children}
										</Box>
									</motion.div>
								</Grid>
							</Grid>
						</motion.div>
						<Box
							position="absolute"
							width="100%"
							bottom={32}
							left="50%"
							sx={{ transform: "translateX(-50%)" }}
						>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2, delay: 5 }}
								style={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Typography variant="overline">{t("scroll")}</Typography>
								<motion.div
									animate={{ y: [0, 10, 0] }}
									transition={{
										duration: 1,
										ease: "easeInOut",
										repeat: Infinity,
									}}
								>
									<ArrowDownward sx={{ ml: 1 }} />
								</motion.div>
							</motion.div>
						</Box>
					</Container>
				</Box>
			</>
		);
	} else {
		return (
			<>
				<style jsx>{`
					.decorativeTitle {
						overflow: hidden;
						font-family: Salome, Georgia, Times, serif;
						color: #111111;
						background: linear-gradient(#222, #111);
						background-clip: text;
						-webkit-text-stroke: 4px transparent;
						white-space: nowrap;
						font-size: 20rem;
						user-select: none;
						line-height: 1.25;
						position: absolute;
						top: 130px;
						left: 50%;
						transform: translateX(-50%);
					}
				`}</style>
				<ParallaxBanner style={{ minHeight: 400 }}>
					<ParallaxBannerLayer
						speed={10}
						style={{ width: "100%", position: "relative" }}
					>
						<span className="decorativeTitle">{props.bottom}</span>
					</ParallaxBannerLayer>
					<ParallaxBannerLayer>
						<Container
							maxWidth={false}
							sx={{
								maxWidth: "max-content",
                                height: "100%",
								display: "flex",
								alignItems: "center",
							}}
						>
							<motion.div
								variants={TextContainer}
								initial="hidden"
								animate="show"
							>
								<motion.div variants={Text}>
									<Typography
										color="text.secondary"
										sx={{
											lineHeight: 1.2,
											marginBottom: "8px",
											fontWeight: 300,
											fontStyle: "italic",
											fontSize: "2rem",
										}}
									>
										{props.top}
									</Typography>
								</motion.div>
								<motion.div variants={Text}>
									<Typography variant="h1" gutterBottom>
										{props.bottom}
									</Typography>
								</motion.div>
							</motion.div>
						</Container>
					</ParallaxBannerLayer>
				</ParallaxBanner>
			</>
		);
	}
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
