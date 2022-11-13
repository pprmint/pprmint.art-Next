import * as React from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import { m } from "framer-motion";
import Head from "components/Head";
import Title from "components/Title";
import Lottie from "react-lottie-player";
import wordmarkJson from "src/animations/wordmark.json";
import prideJson from "src/animations/pride_wordmark.json";

export default function Test() {
	return (
		<>
			<Head
				title="Test page."
				description="I make vector points, polygons, keyframes and colorful monospace letters look neat."
				ogImg="index.png"
			/>
			<Title top="A small playground." bottom="Test page."></Title>
			<Container>
				<Typography variant="h2">Wordmark animation</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Lottie
						animationData={wordmarkJson}
						play
						style={{ width: "100%", maxWidth: 900 }}
					/>
				</Box>
				<Typography variant="h2">Wordmark animation for pride month</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Lottie
						animationData={prideJson}
						play
						style={{ width: "100%", maxWidth: 900 }}
					/>
				</Box>
			</Container>
		</>
	);
}
