import * as React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

import Link from "../src/Link";
import Copyright from "../src/Copyright";

const Home: NextPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Head>
				<title>pprmint.art</title>
				<meta
					name="description"
					content="I make vector points, polygons, keyframes and colorful monospace letters look neat."
				/>

                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/pprmint/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/pprmint/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/pprmint/favicon-16x16.png" />
                <link rel="manifest" href="/favicons/pprmint/site.webmanifest" />
                <link rel="mask-icon" href="/favicons/pprmint/safari-pinned-tab.svg" color="#00CC66" />
                <link rel="shortcut icon" href="/favicons/pprmint/favicon.ico" />
                <meta name="msapplication-TileColor" content="#00CC66" />
                <meta name="msapplication-config" content="/favicons/pprmint/browserconfig.xml" />
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
				</Box>
			</Container>
            <Copyright />
		</motion.div>
	);
};

export default Home;
