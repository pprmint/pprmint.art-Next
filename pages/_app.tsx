import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "src/createEmotionCache";
import { AbstractIntlMessages, NextIntlProvider } from "next-intl";

import "fonts/CabinetGrotesk/cabinetgrotesk.css";
import "fonts/Salome/salome.css";
import "fonts/BasierCircle/basier_circle.css";
import "fonts/BasierCircleMono/basier_circle_mono.css"; // No clue where I might use this one.

import theme from "src/theme";
import "src/global.scss";

import Navigation from "src/components/Navigation";
import PageTransition from "src/components/PageTransition";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface pageProps extends AppProps {
	emotionCache?: EmotionCache;
	pageProps: { messages: AbstractIntlMessages };
}

export default function MyApp(props: pageProps) {
	const location = useRouter();
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navigation />
				<AnimatePresence
					exitBeforeEnter
					onExitComplete={() => window.scrollTo(0, 0)}
				>
					<NextIntlProvider
						messages={pageProps.messages}
						key={location.pathname}
					>
						<Head>
							<meta
								name="viewport"
								content="initial-scale=1, width=device-width"
							/>
						</Head>
						<ParallaxProvider>
							<PageTransition>
								<Component {...pageProps} />
							</PageTransition>
						</ParallaxProvider>
					</NextIntlProvider>
				</AnimatePresence>
			</ThemeProvider>
		</CacheProvider>
	);
}
