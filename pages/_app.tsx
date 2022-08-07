import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";

import "../fonts/Noway/Noway.css";
import "../fonts/N27/N27.css";

import theme from "../src/theme";
import "../src/global.scss";

import Navigation from "../src/components/Navigation";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const location = useRouter();
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</Head>
            <Navigation />
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<AnimatePresence
					exitBeforeEnter
					// onExitComplete={() => window.scrollTo(0, 0)}
				>
					<Component
						{...pageProps}
						location={location}
						key={location.pathname}
					/>
				</AnimatePresence>
			</ThemeProvider>
		</CacheProvider>
	);
}
