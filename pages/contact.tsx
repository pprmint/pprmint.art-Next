import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { parseISO } from "date-fns";
import { m } from "framer-motion";

import Head from "components/Head";
import Button from "components/Button";

import { PaperPlaneRight } from "phosphor-react";

import { SectionContainer, Section } from "animations/sectionAnimations";



function Form() {
	const t = useTranslations("Contact.Form");
	return (
		<form className="grid grid-col gap-3 md:gap-6">
			<label>
				{t("Name.label")}
				<input
					type="text"
					name="name"
					className="w-full bg-black-light2 ring-green ring-0 focus:ring-2 duration-100 focus:bg-black-light1 outline-none rounded-md p-3"
				/>
			</label>
			<label>
				{t("Email.label")}
				<input
					type="text"
					name="email"
					className="w-full bg-black-light2 ring-green ring-0 focus:ring-2 duration-100 focus:bg-black-light1 outline-none rounded-md p-3"
				/>
			</label>
			<label className="ml-auto">
				{t("Message.label")}
				<textarea
					name="message"
					className="box-border w-full bg-black-light2 ring-green ring-0 focus:ring-2 duration-100 focus:bg-black-light1 outline-none rounded-md p-3"
				/>
			</label>
			<Button>{t("submit")}<PaperPlaneRight /></Button>
		</form>
	);
}

export default function Contact() {
	const t = useTranslations("Contact");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
			/>
			<main className="py-40 max-w-7xl mx-auto px-6 md:px-9 font-sans text-white-dark2">
				<m.div
					variants={SectionContainer}
					initial="hidden"
					animate="show"
					exit="exit"
				>
					<m.div variants={Section} className="py-5">
						<h1 className="font-bold text-white text-5xl md:text-6xl pb-3">
							{t("Head.title")}
						</h1>
					</m.div>
					<div className="grid grid-flow-row md:grid-flow-col gap-6">
						<m.div
							variants={Section}
							className="bg-black-light1 border-2 border-black-light2 rounded-xl p-6"
						>
							<h2 className="font-bold text-white text-3xl pb-3">
								{t("Form.heading")}
							</h2>
							<Form />
						</m.div>
						<m.div
							variants={Section}
							className="bg-black-light1 border-2 border-black-light2 rounded-xl p-6"
						>
							<h2 className="font-bold text-white text-3xl pb-3">
								{t("Other.heading")}
							</h2>
							<p>{t("Other.text")}</p>
						</m.div>
					</div>
				</m.div>
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
