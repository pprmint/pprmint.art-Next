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
} from "@mui/material";
import Lottie from "react-lottie-player";
import wordmarkJson from "src/animations/wordmark.json";
import Link from "src/components/Link";

import { FiChevronUp, FiHeart } from "react-icons/fi";

const Links = [
    {
        name: "Home",
        path: "/",
        icon: <FiHeart />,
    },
    {
        name: "Privacy",
        path: "/privacy",
        icon: <FiChevronUp />,
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
                sx={{ position: "fixed", bottom: 32, right: 32, zIndex: 9999 }}
            >
                <Fab size="medium" aria-label="scroll back to top">
                    <FiChevronUp />
                </Fab>
            </Box>
        </Zoom>
    );
}

export default function Navigation() {
    const router = useRouter();

    const [value, setValue] = React.useState("/");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

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
                    <Link href={link.path} key={link.path}>
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
                {Links.map((link) => (
                    <Link href={link.path} key={link.path}>
                        <IconButton aria-label="add an alarm">
                            {link.icon}
                        </IconButton>
                    </Link>
                ))}
            </Box>
            <ScrollTop />
        </>
    );
}
