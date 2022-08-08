import { Box, Typography, Divider } from "@mui/material";
import Link from "./Link";
import { FiCoffee, FiHeart } from "react-icons/fi";
import { NextIntlProvider, useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("Footer");
    return (
        <NextIntlProvider>
            <Divider />
            <Box py={4}>
                <Typography variant="body1" color="text.secondary" align="center">
                    {t("madeWith")}<FiHeart style={{ color: 'var(--redPrimary)' }} />{t("and")}<FiCoffee style={{ color: 'var(--yellowPrimary)' }} />
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                    {"© "}{new Date().getFullYear()} pprmint.
                </Typography>
                <Typography variant="body2" color="text.primary" align="center" gutterBottom
                >
                    <Link href="/privacy" scroll={false}>Privacy policy</Link>
                </Typography>
            </Box>
        </NextIntlProvider>
    );
}
