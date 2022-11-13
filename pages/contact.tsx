import Image from "next/image";
import Link from "next/link";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Container, Box, Button, Typography } from "@mui/material";
import { m } from "framer-motion";

import Head from "components/Head";
import Title from "components/Title";
import Footer from "components/Footer";

import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import ContactForm from "components/Form";

export default function Contact() {
	const t = useTranslations("Contact");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="contact.png"
			/>
			<Title top={t("Title.top")} bottom={t("Title.bottom")} />
			<Container>
				<ContactForm />
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
