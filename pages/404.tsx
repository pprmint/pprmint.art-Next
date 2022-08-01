import * as React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Container, Typography, Box } from "@mui/material";
import Lottie from "react-lottie-player";
import errorJson from "../animations/error.json";

import Link from "../src/Link";
import Copyright from "../src/Copyright";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>That's a goner.</title>
				<meta
					name="description"
					content="I make vector points, polygons, keyframes and colorful monospace letters look neat."
				/>
				<meta name="theme-color" content="#00CC66" />
				<meta
					property="og:description"
					content="I make vector points, polygons, keyframes and colorful monospace letters look neat."
				/>
				<meta content="summary_large_image" name="twitter:card" />
				<meta
					property="og:image"
					content="https://next.pprmint.art/og/index.png"
				/>
				<meta property="og:title" content="A Next.JS site." />
				<meta property="og:url" content="https://next.pprmint.art" />
			</Head>
			<Container maxWidth="lg">
				<Box
					sx={{
						my: 4,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography variant="h4" component="h1" gutterBottom>
						Error 404
					</Typography>
					<Lottie
						loop={false}
						animationData={errorJson}
						play
						style={{ width: 800, height: 400 }}
					/>
					<Link href="/" color="primary">
						Go home
					</Link>
					<Copyright />
				</Box>
			</Container>
		</>
	);
};

export default Home;
