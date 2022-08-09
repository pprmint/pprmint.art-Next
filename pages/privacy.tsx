import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { parseISO } from 'date-fns';
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

import Head from "src/components/Head";
import Title from "src/components/Title";
import Footer from "src/components/Footer";
import Link from "../src/components/Link";
import { FiExternalLink } from "react-icons/fi";

export default function PrivacyPolicy() {
    const t = useTranslations("PrivacyPolicy");
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Head
                title={t("Head.title")}
                description={t("Head.description")}
                ogImg="privacy.png"
            />
            <Title
                top={t(
                    "Title.top",
                    { revisionDate: parseISO('2022-08-09T') }, // YYYY-MM-DD
                )}
                bottom={t("Title.bottom")}
            />
            <Container maxWidth="lg">
                <Typography variant="h2">Contact.</Typography>
                <Typography gutterBottom>
                    If you have any privacy-related questions, feel free to send
                    an email to privacy[at]pprmint.art. <br />
                    Only use this address for the above-mentioned purpose, not
                    to ask general questions, send advertisements, spam or
                    similar.
                </Typography>
                <Typography variant="h2">General.</Typography>
                <Typography gutterBottom>
                    This website does not collect any personally identifiable
                    data through analytics, trackers, cookies, fingerprinting,
                    what have you.
                    <br />
                    Emails you might send to me will be processed by my mail
                    provider{" "}
                    <Link
                        color="secondary"
                        href="https://www.fastmail.com/about/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Fastmail
                        <FiExternalLink />
                    </Link>
                    . Your name, email address and message contents won't ever
                    be shared with any other third parties.
                </Typography>
                <Typography variant="h2">Hosting.</Typography>
                <Typography gutterBottom>
                    The website itself is hosted on{" "}
                    <Link
                        color="secondary"
                        href="https://vercel.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vercel
                        <FiExternalLink />
                    </Link>
                    , who may keep logs that contain your IP address and system
                    configuration, which is used "improve" their services and
                    platform, as well as to detect threats.
                    <br />
                    Some images, videos, and other files that you can download
                    are hosted on my webspace from{" "}
                    <Link
                        color="secondary"
                        href="https://www.hetzner.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hetzner
                        <FiExternalLink />
                    </Link>
                    . When your browser accesses things from said webspace, the
                    server will log it. For full transparency, this is what one
                    such log entry can contain:
                    <br />
                    <strong>Domain: </strong>
                    pprmint.art. Shocking, I know.
                    <br />
                    <strong>IP address: </strong>
                    Hetzner is required by law to anonymize IP addresses, which
                    is done by randomizing their last octet.
                    <br />
                    <strong>Access time: </strong>
                    The time when a client received a file from the server. If
                    you care: The format is DD/MMMM/YYYY: HH:MM:SS +GMT.
                    <br />
                    <strong>Received file: </strong>
                    The path and name of the file that the client (your browser)
                    received.
                    <br />
                    <strong>HTTP code: </strong>
                    Usually that's "200 OK", because ♪ everything is awesome ♪.
                    If you wanna learn more about all the different codes that
                    the HTTP world has to offer, see{" "}
                    <Link
                        color="secondary"
                        href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        HTTP response status codes - HTTP | MDN
                        <FiExternalLink />
                    </Link>
                    <br />
                    <strong>User-Agent: </strong>
                    This thing tells the server infos like what browser,
                    operating system and rendering engine was used to access
                    something. It also allows me to tell you that Windows 11 is
                    still referred to as "Windows NT 10.0; Win64; x64" in there.
                    For more info on what's in the User-Agent header, see{" "}
                    <Link
                        color="secondary"
                        href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        User-Agent - HTTP | MDN
                        <FiExternalLink />
                    </Link>
                    <br />
                    <strong>Storage period: </strong>
                    Each log entry is stored for up to 7 days.
                    <br />
                    If you don't use Hetzner yourself: The logs appear in a
                    giant scrollable list, in descending order from bottom
                    (newest) to top (oldest). If I wanted, I could store these
                    logs to then let Hetzner generate statistics at the end of
                    each month, but I recently disabled that and also manually
                    deleted all remaining files from the server.
                </Typography>
                <Typography variant="h2">External links.</Typography>
                <Typography gutterBottom>
                    Pages may contain links to external websites. Any link that
                    takes you to third party sites will be highlighted in blue
                    and have an icon{" "}
                    <Link href="#" scroll={false} color="secondary">
                        like this
                        <FiExternalLink />
                    </Link>
                    . Once you visit such external websites, you are subject to
                    their respective privacy policies, and I take no
                    responsibility for their practices or contents.
                </Typography>
            </Container>
            <Footer />
        </motion.div>
    );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`locales/${locale}/strings.json`)).default
        }
    };
}