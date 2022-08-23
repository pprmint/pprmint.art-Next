import * as React from "react";
import { useRouter } from "next/router";
import {
    AppBar,
    Fab,
    Box,
    useScrollTrigger,
    Zoom,
    BottomNavigation,
    BottomNavigationAction,
    IconButton,
    Paper,
    Stack,
    Tooltip,
} from "@mui/material";
import Lottie from "react-lottie-player";
import wordmarkJson from "src/animations/wordmark.json";
import Link from "src/components/Link";

import {
    FiChevronUp,
    FiHome,
    FiImage,
    FiPackage,
    FiMail,
} from "react-icons/fi";

const Links = [
    {
        name: "Home",
        path: "/",
        icon: <FiHome />,
    },
    {
        name: "Works",
        path: "/",
        icon: <FiImage />,
    },
    {
        name: "Projects",
        path: "/",
        icon: <FiPackage />,
    },
    {
        name: "Contact",
        path: "/",
        icon: <FiMail />,
    },
];

function ScrollTop() {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 75,
    });

    return (
        <Zoom in={trigger}>
            <Box
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                sx={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999 }}
            >
                <Fab size="large" aria-label="scroll back to top">
                    <FiChevronUp />
                </Fab>
            </Box>
        </Zoom>
    );
}

export default function Navigation() {
    const router = useRouter();
    return (
        <>
            {/* Desktop navigation */}
            <AppBar
                color="transparent"
                elevation={0}
                sx={{
                    display: { xs: "none", sm: "block" },
                    position: "absolute",
                    zIndex: 9999,
                    backgroundImage: "linear-gradient(#111f, #1110)",
                }}
            >
                <Link href="/" scroll={false}>
                    <Lottie
                        loop={false}
                        animationData={wordmarkJson}
                        play
                        style={{ height: 75, width: "min-width" }}
                    />
                </Link>
                {Links.map((link) => (
                    <Link href={link.path} key={link.path} scroll={false}>
                        {link.name}
                    </Link>
                ))}
            </AppBar>
            {/* Mobile navigation */}
            <Box
                p={1}
                sx={{
                    backgroundColor: "var(--backgroundSecondary)",
                    display: { xs: "static", sm: "none" },
                    position: "fixed",
                    bottom: "0",
                    width: "100%",
                    zIndex: 9999,
                }}
            >
                <Stack spacing={1} direction="row">
                    {Links.map((link) => (
                        <Tooltip title={link.name} placement="top" key={link.path}>
                            <IconButton
                                component={Link}
                                href={link.path}
                                scroll={false}
                                aria-label={link.name}
                            >
                                {link.icon}
                            </IconButton>
                        </Tooltip>
                    ))}
                </Stack>
            </Box>
            <ScrollTop />
        </>
    );
}
