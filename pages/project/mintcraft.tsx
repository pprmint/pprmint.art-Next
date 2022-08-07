import Head from "src/components/CommonHead";
import { Container, Box, Typography, Button, Divider } from "@mui/material";
import { motion } from "framer-motion";

import Title from "src/components/Title";
import Link from "src/components/Link";

export default function Mintcraft() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Head
				title="Mintcraft."
				description="A resource pack for Minecraft that offers a dark theme."
				ogImg="mintcraft.png"
				favicon="mintcraft"
				color="#ffbb22"
			/>
			<Title top="A Minecraft resource pack." bottom="Mintcraft." />
			<Box
				sx={{
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
