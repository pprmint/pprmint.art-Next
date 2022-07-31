import Head from "next/head";
import { Container, Typography, Box } from "@mui/material";

export default function Mintcraft() {
	return (
		<>
			<Head>
				<title>Mintcraft</title>

                <link rel="apple-touch-icon" sizes="180x180" href="./favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./favicons/favicon-16x16.png" />
                <link rel="manifest" href="./favicons/site.webmanifest" />
                <link rel="mask-icon" href="./favicons/safari-pinned-tab.svg" color="#ffbb22" />
                <link rel="shortcut icon" href="./favicons/favicon.ico" />
                <meta name="msapplication-TileColor" content="#ffbb22" />
                <meta name="msapplication-config" content="./favicons/browserconfig.xml" />
                <meta name="theme-color" content="#ffbb22" />

                <link rel="shortcut icon" href="/static/leaf.ico" />
				<meta
					name="description"
					content="Holy shit if this works I swear to god."
				/>
				<meta
					property="og:description"
					content="Holy shit if this works I swear to god."
				/>
                <meta content="summary_large_image" name="twitter:card" />
				<meta
					property="og:image"
					content="https://next.pprmint.art/og/noclickbait.png"
				/>
				<meta property="og:title" content="please work." />
				<meta property="og:url" content="https://next.pprmint.art/works/2022/lights" />
			</Head>
			<Container maxWidth="lg">
				<Typography variant="h1top">downloads</Typography>
				<Typography variant="h1">It's a thing!</Typography>
			</Container>
		</>
	);
}
