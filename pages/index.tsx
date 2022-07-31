import * as React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Container, Typography, Box } from "@mui/material";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>pprmint.art</title>
				<meta
					name="description"
					content="I make vector points, polygons, keyframes and colorful monospace letters look neat."
				/>
				<meta name="theme-color" content="#00cc66" />
				<meta
					property="og:description"
					content="I make vector points, polygons, keyframes and colorful monospace letters look neat."
				/>
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
						MUI v5 + Next.js with TypeScript example
					</Typography>
					<Link href="/works/2022/lights" color="secondary">
						Go to the about page
					</Link>
					<ProTip />
					<Copyright />
				</Box>
			</Container>
		</>
	);
};

export default Home;
