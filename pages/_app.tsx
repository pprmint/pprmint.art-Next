import Head from "next/head";
import { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { AbstractIntlMessages, NextIntlProvider } from "next-intl";

import "fonts/Aspekta/aspekta.css";

import "styles/globals.css";

import Navigation from "components/Navigation";

interface pageProps extends AppProps {
	pageProps: { messages: AbstractIntlMessages };
}

export default function App({ Component, pageProps }: AppProps) {
	const location = usePathname();
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				{/* OpenGraph metadata */}
				<meta property="og:site_name" content="pprmint.art" />
				{/* Twitter metadata */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@npprmint" />
				<meta name="twitter:creator" content="@npprmint" />
			</Head>
			<NextIntlProvider messages={pageProps.messages}>
				<Navigation />
				<LazyMotion features={domAnimation}>
					<AnimatePresence
						exitBeforeEnter
						onExitComplete={() => window.scrollTo(0, 0)}
					>
						<m.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key={location}
						>
							<Component {...pageProps} />
						</m.div>
					</AnimatePresence>
				</LazyMotion>
			</NextIntlProvider>
		</>
	);
}
