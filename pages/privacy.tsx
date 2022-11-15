import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { parseISO } from "date-fns";
import { m } from "framer-motion";

import Head from "components/Head";
import Title from "components/Title";
import Footer from "components/Footer";

import { FiExternalLink } from "react-icons/fi";
import { ArrowUpRight } from "@carbon/icons-react";

export default function PrivacyPolicy() {
	const t = useTranslations("PrivacyPolicy");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="privacy.png"
			/>
			<div className="py-40 max-w-6xl mx-auto">
				<section className="py-5">
					<h1 className="font-sans font-bold text-white text-6xl pb-2">
						{t("Title.bottom")}
					</h1>
					<h2 className="font-sans text-white-dark2 text-4xl">
						{t(
							"Title.top",
							{ revisionDate: parseISO("2022-10-28T") } // YYYY-MM-DD
						)}
					</h2>
				</section>
				<section className="py-5">
					<div className="bg-gradient-to-br from-black-light1 to-black border border-black-light2 rounded-xl p-6">
						<h3 className="font-sans font-bold text-white text-3xl pb-2">
							{t("Content.Tldr.heading")}
						</h3>
						<p className="font-sans text-white-dark2">
							{t("Content.Tldr.text")}
						</p>
					</div>
				</section>

				<section className="py-5">
					<h3 className="font-sans font-bold text-white text-3xl pb-2">
						{t("Content.General.heading")}
					</h3>
					<p className="font-sans text-white-dark2">
						{t("Content.General.text1")}
						<br />
						{t("Content.General.text2")}
						<br />
						<Link href="" className="external" scroll={false}>
							{t.rich("Content.General.example", {
								strong: (children) => <strong>{children}</strong>,
							})}
							<ArrowUpRight />
						</Link>
					</p>
				</section>

				<section className="py-5">
					<h3 className="font-sans font-bold text-white text-3xl pb-2">
						{t("Content.Hosting.heading")}
					</h3>
					<p className="font-sans text-white-dark2">
						{t.rich("Content.Hosting.text1", {
							strong: (children) => <strong>{children}</strong>,
						})}
						<br />
						{t.rich("Content.Hosting.text2", {
							strong: (children) => <strong>{children}</strong>,
						})}
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
							href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
							target="_blank"
							rel="noopener noreferrer"
						>
							HTTP response status codes - HTTP | MDN
							<ArrowUpRight />
						</Link>
						<br />
						{t.rich("Content.Hosting.Log.userAgent", {
							strong: (children) => <strong>{children}</strong>,
						})}
						<br />
						<Link
							className="external"
							href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"
							target="_blank"
							rel="noopener noreferrer"
						>
							User-Agent - HTTP | MDN
							<ArrowUpRight />
						</Link>
						<br />
						{t("Content.Hosting.text3")}
						<br />
						{t("Content.Hosting.text4")}
						<br />
						<div>
							<Link
								className="external"
								href="https://vercel.com/legal/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("Content.privacyPolicyOf", {
									provider: "Vercel",
								})}
								<ArrowUpRight />
							</Link>
							<Link
								className="external"
								href="https://www.hetzner.com/legal/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("Content.privacyPolicyOf", {
									provider: "Hetzner",
								})}
								<ArrowUpRight />
							</Link>
						</div>
					</p>
				</section>

				<section className="py-5">
					<h3 className="font-sans font-bold text-white text-3xl pb-2">
						{t("Content.Contact.heading")}
					</h3>
					<p className="font-sans text-white-dark2">
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
							href="https://www.fastmail.com/about/privacy/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t("Content.privacyPolicyOf", { provider: "Fastmail" })}
							<ArrowUpRight />
						</Link>
					</p>
				</section>
			</div>
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
