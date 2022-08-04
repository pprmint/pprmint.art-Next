import * as React from 'react';
import {
    ThemeProvider,
    IconButton,
    AppBar,
    Toolbar,
    Box,
    Drawer,
    List,
    ListItem,
    useScrollTrigger,
    Button,
    Stack,
    Divider,
    ListItemIcon,
} from "@mui/material";
import theme from './theme';
import Lottie from "react-lottie-player";
import wordmarkJson from "../animations/wordmark.json";
import Link from "../src/Link";

interface Props {
    children: React.ReactElement;
}

// Transparent app bar when at top of page, backdrop filter + divider line once scrolling down
function ElevationScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return React.cloneElement(children, {
        sx: trigger
            ? {
                background: "#1115",
                boxShadow: "0px 2px 8px -1px #111111",
            }
            : {
                background: "#1110",
                boxShadow: "0 0 0 0 #111111",
            },
    });
}

export default function Navigation() {
    return (
        <ThemeProvider theme={theme}>
            <ElevationScroll>
                <AppBar
                    position="fixed"
                    color="transparent"
                    sx={{
                        transition: "all 0.15s",
                    }}
                >
                    <Toolbar sx={{ pl: "17px !important" }}>
                        <Box sx={{ display: "flex", flexGrow: 1 }}>
                            <Lottie
                                loop={false}
                                animationData={wordmarkJson}
                                play
                                style={{ height: 70 }}
                            />
                        </Box>
                        <Button
                            size="small"
                            variant="outlined"
                            component={Link}
                            noLinkStyle
                            href="https://pprmint.art"
                        >
                            Go to React site
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </ThemeProvider>
    );
}
