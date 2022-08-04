import { Box, Typography, Divider } from "@mui/material";
import Link from "./Link";
import { FiCoffee, FiHeart } from "react-icons/fi";

export default function Copyright() {
    return (
        <>
            <Divider />
            <Box py={4}>
                <Typography variant="body1" color="text.secondary" align="center">
                    Made with <FiHeart style={{ position: "relative", top: 2, color: "var(--redPrimary)" }} /> and{" "}
                    <FiCoffee style={{ position: "relative", top: 2, color: "var(--yellowPrimary)" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                    {"© "}{new Date().getFullYear()} pprmint.
                </Typography>
                <Typography variant="body2" color="text.primary" align="center" gutterBottom
                >
                    <Link href="/privacy">Privacy policy</Link>
                </Typography>
            </Box>
        </>
    );
}
