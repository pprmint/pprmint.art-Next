import * as React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Container, Typography, Box, Button } from "@mui/material";

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
				<meta content="summary_large_image" name="twitter:card" />
				<meta
					property="og:image"
					content="https://next.pprmint.art/og/index.png"
				/>
				<meta property="og:title" content="[PREVIEW] pprmint.art" />
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
					<Button
						variant="outlined"
						component={Link}
						noLinkStyle
						href="/project/mintcraft"
					>
						Go to Mintcraft page
					</Button>
					<ProTip />
					<Copyright />
				</Box>
			</Container>
		</>
	);
};

export default Home;
