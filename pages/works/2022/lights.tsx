import Head from "next/head";
import { Container, Typography, Box } from "@mui/material";

export default function Lights() {
	return (
		<>
			<Head>
				<title>lights // pprmint.art</title>
				<meta
					name="description"
					content="Holy shit if this works I swear to god."
				/>
				<meta name="theme-color" content="#1199ff" />
				<meta
					property="og:description"
					content="Holy shit if this works I swear to god."
				/>
				<meta
					property="og:image"
					content="https://next.pprmint.art/og/noclickbait.png"
				/>
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1080" />
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
