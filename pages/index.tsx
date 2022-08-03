import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

import Title from "../src/Title";
import Link from "../src/Link";
import Copyright from "../src/Copyright";

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Head>
                <title>pprmint.art</title>
                <meta
                    name="description"
                    content="I make vector points, polygons, keyframes and colorful monospace letters look neat."
                />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/pprmint/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/pprmint/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/pprmint/favicon-16x16.png"
                />
                <link
                    rel="manifest"
                    href="/favicons/pprmint/site.webmanifest"
                />
                <link
                    rel="mask-icon"
                    href="/favicons/pprmint/safari-pinned-tab.svg"
                    color="#00CC66"
                />
                <link
                    rel="shortcut icon"
                    href="./favicons/pprmint/favicon.ico"
                />
                <meta name="msapplication-TileColor" content="#00CC66" />
                <meta
                    name="msapplication-config"
                    content="./favicons/pprmint/browserconfig.xml"
                />
                <meta name="theme-color" content="#00CC66" />

                <meta
                    property="og:description"
                    content="I make vector points, polygons, keyframes and colorful monospace letters look neat."
                />
                <meta content="summary_large_image" name="twitter:card" />
                <meta
                    property="og:image"
                    content="https://next.pprmint.art/og/index.png"
                />
                <meta property="og:title" content="[PREVIEW] pprmint.art" />
                <meta property="og:url" content="https://next.pprmint.art" />
            </Head>
            <Title
                big
                top="Small text."
                bottom="Big text."
                body="Lorem ipsum dolor sit amet."
                src="https://media.pprmint.art/2022/Lights/N.png"
            >
                <Button
                    variant="outlined"
                    component={Link}
                    noLinkStyle
                    href="/nothing"
                >
                    Go to non-existent page
                </Button>
            </Title>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        my: 4,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Button
                        variant="outlined"
                        component={Link}
                        noLinkStyle
                        href="/project/mintcraft"
                    >
                        Go to Mintcraft page
                    </Button>
                </Box>
            </Container>
            <Copyright />
        </motion.div>
    );
}
