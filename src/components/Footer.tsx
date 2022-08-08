import { useRouter } from "next/router";
import { Box, Typography, Divider, Stack, Container } from "@mui/material";
import Link from "./Link";
import { FiCoffee, FiExternalLink, FiHeart } from "react-icons/fi";
import { NextIntlProvider, useTranslations } from "next-intl";

export default function Footer() {
	const t = useTranslations("Footer");
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);
	return (
		<NextIntlProvider>
			<Divider />
			<Box py={4}>
				<Container maxWidth="lg">
					<Typography variant="body1" color="text.secondary">
						{t("madeWith")}
						<FiHeart style={{ color: "var(--redPrimary)" }} />
						{t("and")}
						<FiCoffee style={{ color: "var(--yellowPrimary)" }} />
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						gutterBottom
					>
						{"© "}
						{new Date().getFullYear()} pprmint.
					</Typography>
					<Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, md: 3 }}>
						{/* Internal links */}
						<Typography variant="body2">
							<Link href={route} locale={otherLocale}>
								{t("switchLocale", { locale: otherLocale })}
							</Link>
						</Typography>
						<Typography variant="body2">
							<Link href="/privacy" scroll={false}>
								{t("privacyPolicy")}
							</Link>
						</Typography>

						<Divider orientation="vertical" flexItem />

						{/* External links */}
						<Typography variant="body2">
							<Link
								href="https://youtube.com/c/pprmint"
								target="_blank"
								rel="noopener noreferrer"
								color="secondary"
							>
								YouTube
								<FiExternalLink />
							</Link>
						</Typography>
						<Typography variant="body2">
							<Link
								href="https://github.com/pprmint"
								target="_blank"
								rel="noopener noreferrer"
								color="secondary"
							>
								GitHub
								<FiExternalLink />
							</Link>
						</Typography>
						<Typography variant="body2">
							<Link
								href="https://patreon.com/pprmint/"
								target="_blank"
								rel="noopener noreferrer"
								color="secondary"
							>
								Patreon
								<FiExternalLink />
							</Link>
						</Typography>
						<Typography variant="body2">
							<Link
								href="https://discord.com/invite/Vw9JXwr"
								target="_blank"
								rel="noopener noreferrer"
								color="secondary"
							>
								Discord
								<FiExternalLink />
							</Link>
						</Typography>
					</Stack>
				</Container>
			</Box>
		</NextIntlProvider>
	);
}