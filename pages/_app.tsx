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
				<noscript>
					<div className="bg-red-dark3 po-5 font-sans text-white-dark2">
						<h1 className="font-sans font-bold text-white text-6xl pb-2">
							JavaScript seems to be disabled.
						</h1>
						<p>
							If you're a fellow NoScript user: Hiya. You need to add this site
							to the exceptions in order to see anything useful. If you aren't,
							either some of your browser settings or extensions don't allow
							JavaScript, or your browser is just too old.
						</p>
						<p>
							Should JavaScript not be your thing, fear not! I'm also on other
							sites that kinda require JavaScript to work properly:
						</p>
						<ul>
							<li>
								<a href="https://twitter.com/npprmint" className="text-blue">
									Twitter
								</a>
							</li>
							<li>
								<a href="https://youtube.com/@npprmint" className="text-blue">
									YouTube
								</a>
							</li>
							<li>
								<a href="https://npprmint.tumblr.com" className="text-blue">
									Tumblr
								</a>
							</li>
							<li>
								<a href="https://github.com/pprmint" className="text-blue">
									GitHub
								</a>
							</li>
						</ul>
						<br />
						<sub>
							also don't mind that lonely menu button, it doesn't work rn.
						</sub>
					</div>
				</noscript>
			</Head>
			<NextIntlProvider messages={pageProps.messages}>
				<LazyMotion features={domAnimation}>
					<Navigation />
					<AnimatePresence
						mode="wait"
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
