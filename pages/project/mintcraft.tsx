import Head from "src/components/Head";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import {
	Container,
	Box,
	Typography,
	Button,
	Divider,
	Grid,
} from "@mui/material";
import { motion } from "framer-motion";

import Title from "src/components/Title";
import Link from "src/components/Link";
import Footer from "src/components/Footer";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

// To be added: Function to reuse ribbons with texts as children

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
			<Container
				maxWidth={false}
				sx={{
					minHeight: 500,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					backgroundImage: "linear-gradient(to bottom, #1110, #111c), url(/assets/mintcraft/furnace_bg.png)",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center top",
                    backgroundSize: "cover",
				}}
			>
				<Container sx={{ textAlign: "center" }}>
					<Typography variant="h2">
						{t("Content.About.Dark.heading")}
					</Typography>
					<Typography>
						{t("Content.About.Dark.text1")}
						<br />
						{t.rich("Content.About.Dark.text2", {
							strong: (children) => <strong>{children}</strong>,
						})}
						<br />
						<Link
							className="external"
							color="secondary"
							href="https://vanillatweaks.net/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vanilla Tweaks
							<FiExternalLink />
						</Link>
					</Typography>
				</Container>
			</Container>
			<Container
				maxWidth={false}
				sx={{
					minHeight: 500,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					backgroundImage: "linear-gradient(to bottom, #1110, #111c), url(/assets/mintcraft/beacon_bg.png)",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center top",
                    backgroundSize: "cover",
				}}
			>
				<Container sx={{ textAlign: "center" }}>
					<Typography variant="h2">
						{t("Content.About.Consistent.heading")}
					</Typography>
					<Typography>{t("Content.About.Consistent.text")}</Typography>
				</Container>
			</Container>
			<Container
				maxWidth={false}
				sx={{
					minHeight: 500,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					textAlign: "center",
					backgroundImage: "linear-gradient(to bottom, #1110, #111c), url(/assets/mintcraft/inventory_bg.png)",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center top",
                    backgroundSize: "cover",
				}}
			>
				<Container sx={{ textAlign: "center" }}>
					<Typography variant="h2">
						{t("Content.About.Modern.heading")}
					</Typography>
					<Typography>
						{t.rich("Content.About.Modern.text", {
							small: (children) => (
								<span style={{ fontSize: "0.6rem" }}>{children}</span>
							),
						})}
					</Typography>
				</Container>
			</Container>
			<Footer />
		</motion.div>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
