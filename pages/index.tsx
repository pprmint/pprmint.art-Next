import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Container, Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

import PageTransition from "src/components/PageTransition";
import Head from "src/components/Head";
import Title from "src/components/Title";
import Link from "src/components/Link";
import Footer from "src/components/Footer";

import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function Home() {
    const t = useTranslations("Home");
    return (
        <PageTransition>
            <Head
                title={t("Head.title")}
                description={t("Head.description")}
                ogImg="index.png"
            />
            <Title
                big
                top={t("Title.top")}
                bottom={t("Title.bottom")}
                body={t("Title.description")}
                src="https://media.pprmint.art/code.png"
            >
                <Button
                    variant="contained"
                    component={Link}
                    size="large"
                    color="secondary"
                    href="https://github.com/pprmint/pprmint.art-Next"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<SiGithub />}
                    endIcon={<FiExternalLink />}
                >
                    {t("Title.button")}
                </Button>
            </Title>
            <Box
                sx={{
                    mb: 8,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    variant="outlined"
                    component={Link}
                    scroll={false}
                    noLinkStyle
                    href="/projects/mintcraft"
                >
                    Go to Mintcraft page
                </Button>
            </Box>
            <Container maxWidth="lg">
                <Typography>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Typography>
                <br />
                <Typography variant="h2">Lorem ipsum.</Typography>
                <Typography>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat.
                </Typography>
                <br />
                <Typography variant="h2">Lorem ipsum.</Typography>
                <Typography>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis.
                </Typography>
                <br />
                <Typography variant="h2">Lorem ipsum.</Typography>
                <Typography>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, At accusam aliquyam diam diam dolore
                    dolores duo eirmod eos erat, et nonumy sed tempor et et
                    invidunt justo labore Stet clita ea et gubergren, kasd magna
                    no rebum. sanctus sea sed takimata ut vero voluptua. est
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat.
                </Typography>
                <br />
            </Container>
            <Footer />
        </PageTransition>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`locales/${locale}/strings.json`)).default,
        },
    };
}
