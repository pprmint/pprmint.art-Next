import Head from "next/head";
import { Container, Typography, Box } from "@mui/material";

export default function Mintcraft() {
	return (
		<>
			<Head>
				<title>Mintcraft</title>

                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/mintcraft/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/mintcraft/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/mintcraft/favicon-16x16.png" />
                <link rel="manifest" href="/favicons/mintcraft/site.webmanifest" />
                <link rel="mask-icon" href="/favicons/mintcraft/safari-pinned-tab.svg" color="#ffbb22" />
                <link rel="shortcut icon" href="/favicons/mintcraft/favicon.ico" />
                <meta name="msapplication-TileColor" content="#ffbb22" />
                <meta name="msapplication-config" content="/favicons/mintcraft/browserconfig.xml" />
                <meta name="theme-color" content="#ffbb22" />

				<meta
					name="description"
					content="Dark mode for the Minecraft UI, with some small details here and there."
				/>
				<meta
					property="og:description"
					content="Dark mode for the Minecraft UI, with some small details here and there."
				/>
                <meta content="summary_large_image" name="twitter:card" />
				<meta
					property="og:image"
					content="https://next.pprmint.art/og/mintcraft.png"
				/>
				<meta property="og:title" content="Mintcraf, a Minecraft resource pack." />
				<meta property="og:url" content="https://next.pprmint.art/project/mintcraft" />
			</Head>
			<Container className="title" maxWidth="lg">
				<Typography variant="h1top">A Minecraft resource pack</Typography>
				<Typography variant="h1">Mintcraft</Typography>
			</Container>
		</>
	);
}
