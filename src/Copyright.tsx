import * as React from "react";
import { Typography, Divider } from "@mui/material";
import MuiLink from "@mui/material/Link";
import Link from "./Link";
import { FiCoffee, FiHeart } from "react-icons/fi";

export default function Copyright() {
    return (
        <>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" color="text.secondary" align="center">
                Made with <FiHeart style={{ position: "relative", top: 2, color: "var(--redPrimary)" }} /> and{" "}
                <FiCoffee style={{ position: "relative", top: 2, color: "var(--yellowPrimary)" }} />
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                gutterBottom
            >
                {"© "}
                {new Date().getFullYear()} pprmint.
            </Typography>
            <Typography
                variant="body2"
                color="text.primary"
                align="center"
                gutterBottom
            >
                <Link href="/privacy">Privacy policy</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                Looking for a finished website?{" "}
                <MuiLink color="secondary" href="https://pprmint.art/">
                    Click here.
                </MuiLink>
            </Typography>
        </>
    );
}
