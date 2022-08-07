import * as React from "react";
import type { NextPage } from "next";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import errorJson from "src/animations/error.json";

import Link from "src/components/Link";
import CommonHead from "src/components/CommonHead";

const NotFound: NextPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<CommonHead
				title="This page was not found."
				description="Whatever is supposed to be here according to you or whoever sent you here, it's not."
				ogImg="404.png"
			/>
			<Container maxWidth="lg">
				<Box
					sx={{
                        height: "90vh",
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
						style={{ width: "100%", maxWidth: 900 }}
					/>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							opacity: 0,
							animation:
								"opacity 1s var(--easeOut) 0.7s forwards",
						}}
					>
						<Typography
							variant="h4"
							component="h1"
							gutterBottom
							sx={{
								animation:
									"shiftFromBottom 1s var(--easeOut) 0.6s forwards",
							}}
						>
							This page was not found.
						</Typography>
						<Button
							variant="outlined"
							color="error"
							component={Link}
                            scroll={false}
							noLinkStyle
							href="/"
							sx={{
								animation:
									"shiftFromBottom 1s var(--easeOut) 0.7s forwards",
							}}
						>
							Go to home page
						</Button>
					</Box>
				</Box>
			</Container>
		</motion.div>
	);
};

export default NotFound;
