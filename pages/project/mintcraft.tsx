import Head from "src/components/Head";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Container, Box, Typography, Button, Divider } from "@mui/material";
import { motion } from "framer-motion";

import Title from "src/components/Title";
import Link from "src/components/Link";
import Footer from "src/components/Footer";

export default function Mintcraft() {
    const t = useTranslations("Project.Mintcraft");
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="mintcraft.png"
				favicon="mintcraft"
				color="#ffbb22"
			/>
			<Title top={t("Title.top")} bottom={t("Title.bottom")} />
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
            <Footer />
		</motion.div>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`locales/${locale}/strings.json`)).default
        }
    };
}