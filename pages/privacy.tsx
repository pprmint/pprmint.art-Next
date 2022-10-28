import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { parseISO } from "date-fns";
import { Container, Typography, Stack, Divider } from "@mui/material";
import { motion } from "framer-motion";

import Head from "src/components/Head";
import Title from "src/components/Title";
import Footer from "src/components/Footer";
import Link from "../src/components/Link";

import { FiExternalLink } from "react-icons/fi";

export default function PrivacyPolicy() {
	const t = useTranslations("PrivacyPolicy");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="privacy.png"
			/>
			<Title
				top={t(
					"Title.top",
					{ revisionDate: parseISO("2022-10-28T") } // YYYY-MM-DD
				)}
				bottom={t("Title.bottom")}
			/>
			<Container maxWidth="md">
				<section>
					<Typography variant="h2">{t("Content.Tldr.heading")}</Typography>
					<Typography>{t("Content.Tldr.text")}</Typography>
					<Divider sx={{ mt: 6, mb: 3 }} />
				</section>
                
				<section>
					<Typography variant="h2">{t("Content.General.heading")}</Typography>
					<Typography gutterBottom>
						{t("Content.General.text1")}
						<br />
						{t("Content.General.text2")}
						<br />
						<Link href="" className="external" color="secondary" scroll={false}>
							{t.rich("Content.General.example", {
								strong: (children) => <strong>{children}</strong>,
							})}
							<FiExternalLink />
						</Link>
					</Typography>
				</section>

				<section>
					<Typography variant="h2">{t("Content.Hosting.heading")}</Typography>
					<Typography gutterBottom>
						{t.rich("Content.Hosting.text1", {
							strong: (children) => <strong>{children}</strong>,
						})}
						<br />
						{t.rich("Content.Hosting.text2", {
							strong: (children) => <strong>{children}</strong>,
						})}
						<Container>
							<br />
							{t.rich("Content.Hosting.Log.domain", {
								strong: (children) => <strong>{children}</strong>,
							})}
							<br />
							{t.rich("Content.Hosting.Log.ipAddress", {
								strong: (children) => <strong>{children}</strong>,
							})}
							<br />
							{t.rich("Content.Hosting.Log.accessTime", {
								strong: (children) => <strong>{children}</strong>,
							})}
							<br />
							{t.rich("Content.Hosting.Log.receivedFile", {
								strong: (children) => <strong>{children}</strong>,
							})}
							<br />
							{t.rich("Content.Hosting.Log.httpCode", {
								strong: (children) => <strong>{children}</strong>,
							})}
							<br />
							<Link
								className="external"
								color="secondary"
								href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
								target="_blank"
								rel="noopener noreferrer"
							>
								HTTP response status codes - HTTP | MDN
								<FiExternalLink />
							</Link>
							<br />
							{t.rich("Content.Hosting.Log.userAgent", {
								strong: (children) => <strong>{children}</strong>,
							})}
							<br />
							<Link
								className="external"
								color="secondary"
								href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"
								target="_blank"
								rel="noopener noreferrer"
							>
								User-Agent - HTTP | MDN
								<FiExternalLink />
							</Link>
						</Container>
						<br />
						{t("Content.Hosting.text3")}
						<br />
						{t("Content.Hosting.text4")}
						<br />
						<Stack direction="row" spacing={2}>
							<Link
								className="external"
								color="secondary"
								href="https://vercel.com/legal/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("Content.privacyPolicyOf", {
									provider: "Vercel",
								})}
								<FiExternalLink />
							</Link>
							<Link
								className="external"
								color="secondary"
								href="https://www.hetzner.com/legal/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("Content.privacyPolicyOf", {
									provider: "Hetzner",
								})}
								<FiExternalLink />
							</Link>
						</Stack>
					</Typography>
				</section>

				<section>
					<Typography variant="h2">{t("Content.Contact.heading")}</Typography>
					<Typography gutterBottom>
						{t.rich("Content.Contact.text1", {
							strong: (children) => <strong>{children}</strong>,
						})}
						<br />
						{t("Content.Contact.text2")}
						<br />
						{t.rich("Content.Contact.text3", {
							strong: (children) => <strong>{children}</strong>,
						})}
						<br />
						<Link
							className="external"
							color="secondary"
							href="https://www.fastmail.com/about/privacy/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t("Content.privacyPolicyOf", { provider: "Fastmail" })}
							<FiExternalLink />
						</Link>
					</Typography>
				</section>
			</Container>
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
