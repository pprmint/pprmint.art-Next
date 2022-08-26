import { Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

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
		body?: string;
		src?: string;
		topLevel?: string;
	}>
) {
	if (props.big) {
		return (
			<ParallaxBanner
				layers={[
					{
						image: props.src,
						speed: -20,
						opacity: [0.75, 0.2],
					},
				]}
				style={{
					minHeight: 600,
					marginBottom: 64,
					display: "flex",
					alignItems: "center",
					overflow: "hidden",
				}}
			>
				<Container maxWidth="xl">
					<Box>
						<Parallax speed={-10}>
							<motion.div
								variants={TextContainer}
								initial="hidden"
								animate="show"
							>
								<motion.div variants={Text}>
									<Typography
										variant="h1top"
										color="text.secondary"
										sx={{ textShadow: "0 4px 10px #1115" }}
									>
										{props.top}
									</Typography>
								</motion.div>
								<motion.div variants={Text}>
									<Typography
										variant="h1"
										gutterBottom
										sx={{
											textShadow: "0 4px 10px #1115",
										}}
									>
										{props.bottom}
									</Typography>
								</motion.div>
								<motion.div variants={Text}>
									<Typography variant="body1" gutterBottom>
										{props.body}
									</Typography>
								</motion.div>
								<motion.div variants={Text}>
									<Box sx={{ display: "flex", justifyContent: "right" }}>
										{props.children}
									</Box>
								</motion.div>
							</motion.div>
						</Parallax>
					</Box>
				</Container>
			</ParallaxBanner>
		);
	} else {
		return (
			<>
				<Container
					maxWidth={false}
					sx={{
						mt: 10,
						py: 8,
						maxWidth: "max-content",
						display: "flex",
						alignItems: "center",
					}}
				>
					<motion.div variants={TextContainer} initial="hidden" animate="show">
						<motion.div variants={Text}>
							<Typography variant="h1top" color="text.secondary">
								{props.top}
							</Typography>
						</motion.div>
						<motion.div variants={Text}>
							<Typography
								variant="h1"
								gutterBottom
							>
								{props.bottom}
							</Typography>
						</motion.div>
					</motion.div>
				</Container>
			</>
		);
	}
}
