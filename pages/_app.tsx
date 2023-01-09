import Head from "next/head";
import { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { AbstractIntlMessages, NextIntlProvider } from "next-intl";
import React from "react";

import "fonts/Inter/inter.css";
import "fonts/MintBit/mintbit.css";

import "styles/globals.css";

import Navigation from "components/Navigation";


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
					<div className="bg-black fixed z-40 w-screen h-screen">
						<div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-5xl w-4/5 rounded-lg bg-black-light1 font-sans text-white-dark2">
							<div className="bg-red-dark3 rounded-t-lg">
								<h1 className="font-sans font-bold text-white text-3xl md:text-5xl p-5 md:p-10 ">
									JavaScript seems to be disabled.
								</h1>
							</div>
							<div className="p-5 md:p-10">
								<p>
									Hiya. This site uses a lot of fancy animations and features
									that require JavaScript to work (for example, navigation menus
									and pop-ups are added and removed from the DOM tree as
									needed).
								</p>
								<br />
								<p>
									Should JavaScript not be your thing, fear not! I'm also on
									other sites that kinda require JavaScript to work properly:
								</p>
								<ul className="list-disc list-inside">
									<li>
										<a
											href="https://twitter.com/npprmint"
											className="text-blue"
										>
											Twitter
										</a>
									</li>
									<li>
										<a
											href="https://youtube.com/@npprmint"
											className="text-blue"
										>
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
							</div>
						</div>
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
							key={location}
							initial={{ opacity: 0, y: -50 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									opacity: { duration: 0.3 },
									duration: 0.6,
									ease: "circOut",
								},
							}}
							exit={{
								opacity: 0,
								transition: { duration: 0.3 },
							}}
						>
							<Component {...pageProps} />
						</m.div>
					</AnimatePresence>
				</LazyMotion>
			</NextIntlProvider>
		</>
	);
}
