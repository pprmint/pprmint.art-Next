import * as React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import errorJson from "../animations/error.json";

import Link from "../src/Link";

const NotFound: NextPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Head>
				<title>Not found.</title>
				<meta
					name="description"
					content="Whatever you were supposed to see here, it doesn't exist."
				/>
				<meta name="theme-color" content="#FF3344" />
				<meta
					property="og:description"
					content="Whatever you were supposed to see here, it doesn't exist."
				/>
				<meta content="summary_large_image" name="twitter:card" />
				<meta
					property="og:image"
					content="https://next.pprmint.art/og/404.png"
				/>
				<meta property="og:title" content="uh. nothing's here?" />
				<meta property="og:url" content="https://next.pprmint.art" />
			</Head>
			<Container maxWidth="lg">
				<Box
					sx={{
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
								"opacity 1s var(--easeOut) 1.8s forwards",
						}}
					>
						<Typography
							variant="h4"
							component="h1"
							gutterBottom
							sx={{
								animation:
									"shiftFromBottom 1s var(--easeOut) 1.7s forwards",
							}}
						>
							{t("title")}
						</Typography>
						<Button
							variant="outlined"
							color="error"
							component={Link}
							noLinkStyle
							href="/"
							sx={{
								animation:
									"shiftFromBottom 1s var(--easeOut) 1.8s forwards",
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
