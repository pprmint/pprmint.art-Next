import { useRouter } from "next/router";
import {
	Box,
	Typography,
	Divider,
	Stack,
	Container,
	Grid,
} from "@mui/material";
import Link from "./Link";
import {
	FavoriteTwoTone,
	CoffeeTwoTone,
	Language,
	ArrowOutward,
} from "@mui/icons-material";
import { NextIntlProvider, useTranslations } from "next-intl";
import logo from "../assets/logo.svg";
import Image from "next/image";

export default function Footer() {
	const t = useTranslations("Footer");
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);
	return (
		<NextIntlProvider>
			<Box mt={8}>
				<Divider />
				<Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4 } }}>
					<Grid container>
						<Grid item xs={12} sm={9}>
							<Typography variant="body1" color="text.secondary">
								{t("madeWith")}
								<FavoriteTwoTone fontSize="inherit" color="error" />
								{t("and")}
								<CoffeeTwoTone fontSize="inherit" color="warning" />
							</Typography>
							<Typography variant="body2" color="text.secondary" gutterBottom>
								{"© "}
								{new Date().getFullYear()} pprmint.
							</Typography>
							<Stack direction="row" spacing={2} mb={1}>
								{/* Internal links */}
								<Typography variant="body2">
									<Link href="/privacy" scroll={false}>
										{t("privacyPolicy")}
									</Link>
								</Typography>
								<Typography variant="body2">
									<Link
										href={route}
										locale={otherLocale}
										scroll={false}
										onClick={() =>
											window.scrollTo({
												top: 0,
												behavior: "smooth",
											})
										}
									>
										<Language fontSize="inherit" />
										{t("switchLocale", {
											locale: otherLocale,
										})}
									</Link>
								</Typography>
							</Stack>
							<Stack direction="row" spacing={2}>
								<Typography variant="body2">
									<Link
										className="external"
										href="https://twitter.com/npprmint"
										target="_blank"
										rel="noopener noreferrer"
										color="secondary"
									>
										Twitter
										<ArrowOutward fontSize="inherit" />
									</Link>
								</Typography>
								<Typography variant="body2">
									<Link
										className="external"
										href="https://youtube.com/c/pprmint"
										target="_blank"
										rel="noopener noreferrer"
										color="secondary"
									>
										YouTube
										<ArrowOutward fontSize="inherit" />
									</Link>
								</Typography>
								<Typography variant="body2">
									<Link
										className="external"
										href="https://github.com/pprmint"
										target="_blank"
										rel="noopener noreferrer"
										color="secondary"
									>
										GitHub
										<ArrowOutward fontSize="inherit" />
									</Link>
								</Typography>
								<Typography variant="body2">
									<Link
										className="external"
										href="https://patreon.com/pprmint/"
										target="_blank"
										rel="noopener noreferrer"
										color="secondary"
									>
										Patreon
										<ArrowOutward fontSize="inherit" />
									</Link>
								</Typography>
								<Typography variant="body2">
									<Link
										className="external"
										href="https://discord.com/invite/Vw9JXwr"
										target="_blank"
										rel="noopener noreferrer"
										color="secondary"
									>
										Discord
										<ArrowOutward fontSize="inherit" />
									</Link>
								</Typography>
							</Stack>
						</Grid>
						<Grid
							item
							xs={0}
							sm={3}
							sx={{
								display: { xs: "none", sm: "flex" },
								justifyContent: "right",
							}}
						>
							<Image
								src="/assets/logo.svg"
								alt="pprmint. logo"
								width="60px"
								height="60px"
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</NextIntlProvider>
	);
}
