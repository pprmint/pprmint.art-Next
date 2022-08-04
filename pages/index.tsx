import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

import Title from "../src/Title";
import Link from "../src/Link";
import Copyright from "../src/Copyright";

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Head>
				<title>pprmint.art</title>
				<meta
					name="description"
					content="I make vector points, polygons, keyframes and colorful monospace letters look neat."
				/>
				<meta name="theme-color" content="#00cc66" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/pprmint/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/pprmint/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/pprmint/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/favicons/pprmint/site.webmanifest"
				/>
				<link
					rel="mask-icon"
					href="/favicons/pprmint/safari-pinned-tab.svg"
					color="#00cc66"
				/>
				<link
					rel="shortcut icon"
					href="./favicons/pprmint/favicon.ico"
				/>
				<meta name="msapplication-TileColor" content="#00cc66" />
				<meta
					name="msapplication-config"
					content="./favicons/pprmint/browserconfig.xml"
				/>

				<meta
					property="og:description"
					content="I make vector points, polygons, keyframes and colorful monospace letters look neat."
				/>
				<meta content="summary_large_image" name="twitter:card" />
				<meta
					property="og:image"
					content="https://next.pprmint.art/og/index.png"
				/>
				<meta property="og:title" content="[PREVIEW] pprmint.art" />
				<meta property="og:url" content="https://next.pprmint.art" />
			</Head>
			<Title
				big
				top="Small text."
				bottom="Big text."
				body="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
				src="https://media.pprmint.art/2022/Lights/N-720.png"
			>
				<Button
                    size="large"
					variant="contained"
					component={Link}
					noLinkStyle
					href="/project/mintcraft"
				>
					Go to Mintcraft page
				</Button>
			</Title>
			<Container maxWidth="lg">
				<Typography>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua. At vero eos et accusam et
					justo duo dolores et ea rebum. Stet clita kasd gubergren, no
					sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
					ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua. At vero eos et accusam et
					justo duo dolores et ea rebum. Stet clita kasd gubergren, no
					sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
					ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua. At vero eos et accusam et
					justo duo dolores et ea rebum. Stet clita kasd gubergren, no
					sea takimata sanctus est Lorem ipsum dolor sit amet.
					<br />
					<br />
					Duis autem vel eum iriure dolor in hendrerit in vulputate
					velit esse molestie consequat, vel illum dolore eu feugiat
					nulla facilisis at vero eros et accumsan et iusto odio
					dignissim qui blandit praesent luptatum zzril delenit augue
					duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
					amet, consectetuer adipiscing elit, sed diam nonummy nibh
					euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat.
					<br />
					<br />
					Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
					consequat. Duis autem vel eum iriure dolor in hendrerit in
					vulputate velit esse molestie consequat, vel illum dolore eu
					feugiat nulla facilisis at vero eros et accumsan et iusto
					odio dignissim qui blandit praesent luptatum zzril delenit
					augue duis dolore te feugait nulla facilisi.
					<br />
					<br />
					Nam liber tempor cum soluta nobis eleifend option congue
					nihil imperdiet doming id quod mazim placerat facer possim
					assum. Lorem ipsum dolor sit amet, consectetuer adipiscing
					elit, sed diam nonummy nibh euismod tincidunt ut laoreet
					dolore magna aliquam erat volutpat. Ut wisi enim ad minim
					veniam, quis nostrud exerci tation ullamcorper suscipit
					lobortis nisl ut aliquip ex ea commodo consequat.
					<br />
					<br />
					Duis autem vel eum iriure dolor in hendrerit in vulputate
					velit esse molestie consequat, vel illum dolore eu feugiat
					nulla facilisis.
					<br />
					<br />
					At vero eos et accusam et justo duo dolores et ea rebum.
					Stet clita kasd gubergren, no sea takimata sanctus est Lorem
					ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
					sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
					labore et dolore magna aliquyam erat, sed diam voluptua. At
					vero eos et accusam et justo duo dolores et ea rebum. Stet
					clita kasd gubergren, no sea takimata sanctus est Lorem
					ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
					sadipscing elitr, At accusam aliquyam diam diam dolore
					dolores duo eirmod eos erat, et nonumy sed tempor et et
					invidunt justo labore Stet clita ea et gubergren, kasd magna
					no rebum. sanctus sea sed takimata ut vero voluptua. est
					Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
					consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et dolore magna aliquyam erat.
					<br />
					<br />
					Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et dolore magna aliquyam erat, sed diam
					voluptua. At vero eos et accusam et justo duo dolores et ea
					rebum. Stet clita kasd gubergren, no sea takimata sanctus
					est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
					consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et dolore magna aliquyam erat, sed diam
					voluptua. At vero eos et accusam et justo duo dolores et ea
					rebum. Stet clita kasd gubergren, no sea takimata sanctus
					est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
					consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et dolore magna aliquyam erat, sed diam
					voluptua. At vero eos et accusam et justo duo dolores et ea
					rebum. Stet clita kasd gubergren, no sea takimata sanctus.
					<br />
					<br />
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua. At vero eos et accusam et
					justo duo dolores et ea rebum. Stet clita kasd gubergren, no
					sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
					ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua. At vero eos et accusam et
					justo duo dolores et ea rebum. Stet clita kasd gubergren, no
					sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
					ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua. At vero eos et accusam et
					justo duo dolores et ea rebum. Stet clita kasd gubergren, no
					sea takimata sanctus est Lorem ipsum dolor sit amet.
					<br />
					<br />
					Duis autem vel eum iriure dolor in hendrerit in vulputate
					velit esse molestie consequat, vel illum dolore eu feugiat
					nulla facilisis at vero eros et accumsan et iusto odio
					dignissim qui blandit praesent luptatum zzril delenit augue
					duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
					amet, consectetuer adipiscing elit, sed diam nonummy nibh
					euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat.
					<br />
					<br />
					Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
					consequat. Duis autem vel eum iriure dolor in hendrerit in
					vulputate velit esse molestie consequat, vel illum dolore eu
					feugiat nulla facilisis at vero eros et accumsan et iusto
					odio dignissim qui blandit praesent luptatum zzril delenit
					augue duis dolore te feugait nulla facilisi.
					<br /> <br />{" "}
				</Typography>
			</Container>
			<Copyright />
		</motion.div>
	);
}
