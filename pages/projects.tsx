import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

import Head from "components/Head";

export default function Projects() {
    const t = useTranslations("Projects");
    return(
        <>
            <Head title={t("Head.title")} description={t("Head.description")} />
        </>
    )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
