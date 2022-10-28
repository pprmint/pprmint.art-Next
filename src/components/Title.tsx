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
							opacity: 1;
						}
						to {
							filter: blur(0px);
							opacity: 1;
							scale: 1;
						}
					}
				`}</style>
				<ParallaxBanner style={{ minHeight: "100vh" }}>
					<ParallaxBannerLayer speed={-40} opacity={[1, 0]}>
						{props.children}
					</ParallaxBannerLayer>
					<ParallaxBannerLayer>
						<Box
							className={props.selection && "selection " + props.selection}
							minHeight="100vh"
							position="relative"
							display="flex"
							alignItems="flex-end"
							overflow="hidden"
							p={{ xs: 0, md: 4, lg: 8 }}
						>
							<Container maxWidth={false}>
								<motion.div
									variants={TextContainer}
									initial="hidden"
									whileInView="show"
								>
									<motion.div variants={Text}>
										<Typography
											variant="h1"
											gutterBottom
											textAlign={{ xs: "center", lg: "left" }}
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
											fontFamily="Basier Square Narrow, Roboto, Helvetica, Arial, sans-serif"
											color="text.secondary"
											textAlign={{ xs: "center", lg: "left" }}
											lineHeight={1.2}
											marginBottom="8px"
											fontWeight={400}
											fontSize="2rem"
										>
											{props.bottom}
										</Typography>
									</motion.div>
								</motion.div>
							</Container>
						</Box>
					</ParallaxBannerLayer>
				</ParallaxBanner>
			</>
		);
	} else {
		return (
			<>
				<Container sx={{ py: 12 }}>
					<motion.div variants={TextContainer} initial="hidden" animate="show">
						<motion.div variants={Text}>
							<Typography
								fontFamily="Basier Square Narrow, Roboto, Helvetica, Arial, sans-serif"
								color="text.secondary"
								lineHeight={1.2}
								marginBottom="8px"
								fontWeight={400}
								fontSize="2.25rem"
							>
								{props.top}
							</Typography>
						</motion.div>
						<motion.div variants={Text}>
							<Typography variant="h1">{props.bottom}</Typography>
						</motion.div>
					</motion.div>
				</Container>
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
