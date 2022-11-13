import Link from "next/link";
import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Container, Typography, Box, Button, Grid, Stack } from "@mui/material";
import { m } from "framer-motion";
import errorJson from "src/animations/error.json";

import Head from "components/Head";
import Footer from "components/Footer";
import NoSSR from "components/NoSSR";

const StopCodes = [
	"I_HATE_WINDOWS",
	"WII_DISC_CHANNEL",
	"NO_CLUE",
	"LAUGHING_MY_ASS_OFF",
	"ROLLING_ON_THE_FLOOR_LAUGHING",
	"ILYGF",
	"FORTY_TWO",
	"PROBABLY_JUST_CURIOSITY",
	"TYPO_MAYBE",
    "CCKMINT",
];

function randomIntForText(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomTextInt = randomIntForText(0, 8);

export default function NotFound() {
	const t = useTranslations("404");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("description")}
				ogImg="404.png"
				color="#1199ff"
			/>
			<Box
				p={8}
				className="selection blue"
				minHeight="100vh"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				sx={{ backgroundColor: "#1199ff" }}
			>
				<Typography
					gutterBottom
					fontSize="8rem"
					color="#fff"
					fontFamily="'Segoe UI Variable', 'Segoe UI', sans-serif"
				>
					{":("}
				</Typography>
				<Typography
					fontSize="2rem"
					color="#fff"
					gutterBottom
					fontFamily="'Segoe UI Variable', 'Segoe UI', sans-serif"
				>
					{t("Content.main")}
				</Typography>
				<Typography
					fontSize="2rem"
					color="#fff"
					gutterBottom
					fontFamily="'Segoe UI Variable', 'Segoe UI', sans-serif"
				>
					0% {t("Content.complete")}
				</Typography>
				<Stack direction="row" spacing={2}>
					<Box>
						<Image
							src="/assets/qr.svg"
                            alt="QR Code."
							width={150}
							height={150}
						/>
					</Box>
					<Box>
						<Typography
							fontSize="1.5rem"
							color="#fff"
							fontFamily="'Segoe UI Variable', 'Segoe UI', sans-serif"
						>
							{t("Content.moreInfo")}
						</Typography>
						<Typography
							fontSize="1.5rem"
							color="#fff"
							gutterBottom
							fontFamily="'Segoe UI Variable', 'Segoe UI', sans-serif"
						>
							https://twitter.com/npprmint
						</Typography>
						<Typography
							fontSize="1rem"
							color="#fff"
							fontFamily="'Segoe UI Variable', 'Segoe UI', sans-serif"
						>
							{t("Content.support")}
						</Typography>
						<NoSSR>
							<Typography
								fontSize="1rem"
								color="#fff"
								fontFamily="'Segoe UI Variable', 'Segoe UI', sans-serif"
							>
								{t("Content.stopCode")}
								{StopCodes[randomTextInt]}
							</Typography>
						</NoSSR>
					</Box>
				</Stack>
			</Box>
			<Footer />
		</>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
