import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { parseISO } from "date-fns";
import { m } from "framer-motion";

import Head from "components/Head";

import { ArrowUpRight } from "phosphor-react";

export default function PrivacyPolicy() {
	const t = useTranslations("PrivacyPolicy");
	return (
		<>
			<Head title={t("Head.title")} description={t("Head.description")} />
			<main className="py-40 max-w-7xl mx-auto px-6 md:px-9 font-sans text-white-dark2">
				<div className="pb-12 text-center">
					<h1 className="font-display font-bold text-white text-4xl md:text-5xl xl:text-7xl pb-3">
						{t("Head.title")}
					</h1>
					<h2 className="text-white-dark2 text-2xl md:text-3xl">
						{t(
							"Content.lastUpdated",
							{ revisionDate: parseISO("2022-12-07T") } // YYYY-MM-DD
						)}
					</h2>
				</div>

				<div className="py-5">
					<div className="bg-black-light1 rounded-xl p-6">
						<h3 className="font-display font-bold text-white text-3xl pb-3">
							{t("Content.Tldr.heading")}
						</h3>
						<p>{t("Content.Tldr.text")}</p>
					</div>
				</div>

				<div className="py-5">
					<h3 className="font-display font-bold text-white text-3xl pb-3">
						{t("Content.General.heading")}
					</h3>
					<p>
						{t("Content.General.text1")}
						<br />
						{t("Content.General.text2")}
						<br />
						<Link
							href=""
							className="font-medium text-blue underline decoration-dotted decoration-2 decoration-blue-dark3 hover:decoration-blue"
							scroll={false}
						>
							{t.rich("Content.General.example", {
								strong: (children) => <strong>{children}</strong>,
							})}
							<ArrowUpRight weight="bold" className="inline" />
						</Link>
					</p>
				</div>

				<div className="py-5">
					<h3 className="font-display font-bold text-white text-3xl pb-3">
						{t("Content.Hosting.heading")}
					</h3>
					<p>{t("Content.Hosting.text1")}</p>
					<br />
					<p>
						{t.rich("Content.Hosting.text2", {
							strong: (children) => <strong>{children}</strong>,
						})}
					</p>
					<br />
					<p>
						{t.rich("Content.Hosting.text3", {
							strong: (children) => <strong>{children}</strong>,
						})}
					</p>
					<br />
					<p>{t("Content.Hosting.text4")}</p>
					<br />
					<div className="pl-3">
						<p>
							{t.rich("Content.Hosting.Log.domain", {
								strong: (children) => <strong>{children}</strong>,
							})}
						</p>
						<br />
						<p>
							{t.rich("Content.Hosting.Log.ipAddress", {
								strong: (children) => <strong>{children}</strong>,
							})}
						</p>
						<br />
						<p>
							{t.rich("Content.Hosting.Log.accessTime", {
								strong: (children) => <strong>{children}</strong>,
							})}
						</p>
						<br />
						<p>
							{t.rich("Content.Hosting.Log.receivedFile", {
								strong: (children) => <strong>{children}</strong>,
							})}
						</p>
						<br />
						<p>
							{t.rich("Content.Hosting.Log.httpCode", {
								strong: (children) => <strong>{children}</strong>,
							})}
						</p>
						<p>
							<Link
								className="font-medium text-blue underline decoration-dotted decoration-2 decoration-blue-dark3 hover:decoration-blue"
								href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
								target="_blank"
								rel="noopener noreferrer"
							>
								HTTP response status codes - HTTP | MDN
								<ArrowUpRight weight="bold" className="inline" />
							</Link>
						</p>

						<p>
							<br />
							{t.rich("Content.Hosting.Log.userAgent", {
								strong: (children) => <strong>{children}</strong>,
							})}
							<br />
						</p>
						<p>
							<Link
								className="font-medium text-blue underline decoration-dotted decoration-2 decoration-blue-dark3 hover:decoration-blue"
								href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"
								target="_blank"
								rel="noopener noreferrer"
							>
								User-Agent - HTTP | MDN
								<ArrowUpRight weight="bold" className="inline" />
							</Link>
						</p>
					</div>
					<br />
					<p>
						{t("Content.Hosting.text5")}
						<br />
					</p>
					<p>
						{t("Content.Hosting.text6")}
						<br />
					</p>
					<p>
						<Link
							className="font-medium text-blue underline decoration-dotted decoration-2 decoration-blue-dark3 hover:decoration-blue"
							href="https://vercel.com/legal/privacy-policy"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t("Content.privacyPolicyOf", {
								provider: "Vercel",
							})}
							<ArrowUpRight weight="bold" className="inline" />
						</Link>
					</p>
					<p>
						<Link
							className="font-medium text-blue underline decoration-dotted decoration-2 decoration-blue-dark3 hover:decoration-blue"
							href="https://vercel.com/legal/dpa"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t("Content.dpaOf", {
								provider: "Vercel",
							})}
							<ArrowUpRight weight="bold" className="inline" />
						</Link>
					</p>
					<p>
						<Link
							className="font-medium text-blue underline decoration-dotted decoration-2 decoration-blue-dark3 hover:decoration-blue"
							href="https://www.hetzner.com/legal/privacy-policy"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t("Content.privacyPolicyOf", {
								provider: "Hetzner",
							})}
							<ArrowUpRight weight="bold" className="inline" />
						</Link>
					</p>
				</div>

				<div className="py-5">
					<h3 className="font-display font-bold text-white text-3xl pb-3">
						{t("Content.Contact.heading")}
					</h3>
					<p>
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
							className="font-medium text-blue underline decoration-dotted decoration-2 decoration-blue-dark3 hover:decoration-blue"
							href="https://www.fastmail.com/about/privacy/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t("Content.privacyPolicyOf", { provider: "Fastmail" })}
							<ArrowUpRight weight="bold" className="inline" />
						</Link>
					</p>
				</div>
			</main>
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
