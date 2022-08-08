import * as React from "react";
import type { NextPage } from "next";
import { GetStaticPropsContext } from 'next';
import { useTranslations } from "next-intl";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import errorJson from "src/animations/error.json";

import Link from "src/components/Link";
import Head from "src/components/Head";

const NotFound: NextPage = () => {
    const t = useTranslations("404");
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Head
				title={t("Head.title")}
				description={t("description")}
				ogImg="404.png"
                color="#ff3344"
			/>
			<Container maxWidth="lg">
				<Box
					sx={{
                        minHeight: "90vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Lottie
						loop={false}
						animationData={errorJson}
						play
						style={{ width: "100%", maxWidth: 900 }}
					/>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							opacity: 0,
							animation:
								"opacity 1s var(--easeOut) 0.7s forwards",
						}}
					>
						<Typography
							variant="h4"
							component="h1"
							sx={{
								animation:
									"shiftFromBottom 1s var(--easeOut) 0.5s forwards",
							}}
						>
							{t("title")}
						</Typography>
						<Typography
							gutterBottom
							sx={{
								animation:
									"shiftFromBottom 1s var(--easeOut) 0.6s forwards",
							}}
						>
							{t("description")}
						</Typography>
						<Button
							variant="outlined"
							color="error"
							component={Link}
                            scroll={false}
							noLinkStyle
							href="/"
							sx={{
								animation:
									"shiftFromBottom 1s var(--easeOut) 0.7s forwards",
							}}
						>
							{t("button")}
						</Button>
					</Box>
				</Box>
			</Container>
		</motion.div>
	);
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`locales/${locale}/strings.json`)).default
        }
    };
}

export default NotFound;