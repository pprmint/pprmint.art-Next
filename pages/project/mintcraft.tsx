import Head from "next/head";
import { Container, Box, Typography, Button, Divider } from "@mui/material";
import { motion } from "framer-motion";

import Link from "../../src/Link";

export default function Mintcraft() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Head>
				<title>Mintcraft</title>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/mintcraft/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/mintcraft/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/mintcraft/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/favicons/mintcraft/site.webmanifest"
				/>
				<link
					rel="mask-icon"
					href="/favicons/mintcraft/safari-pinned-tab.svg"
					color="#FFBB22"
				/>
				<link
					rel="shortcut icon"
					href="/favicons/mintcraft/favicon.ico"
				/>
				<meta name="msapplication-TileColor" content="#FFBB22" />
				<meta
					name="msapplication-config"
					content="/favicons/mintcraft/browserconfig.xml"
				/>
				<meta name="theme-color" content="#FFBB22" />

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
				<meta
					property="og:title"
					content="Mintcraft, a Minecraft resource pack."
				/>
				<meta
					property="og:url"
					content="https://next.pprmint.art/project/mintcraft"
				/>
			</Head>
			<Container className="title" maxWidth="lg">
				<Typography variant="h1top">
					A Minecraft resource pack
				</Typography>
				<Typography variant="h1">Mintcraft</Typography>
			</Container>
			<Box
				sx={{
					my: 4,
					py: 8,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					background: "var(--backgroundSecondary)",
				}}
			>
				<Typography variant="h2">
					It's not actually here yet.
				</Typography>
				<Typography>
					However I now know that I'll likely put bars like this on
					some pages, perhaps with an image to the right for like
					announcements and stuff.
				</Typography>
				<Button
					sx={{ mt: 4 }}
					variant="outlined"
					component={Link}
					noLinkStyle
					href="/"
				>
					Go to Home page
				</Button>
			</Box>
		</motion.div>
	);
}
