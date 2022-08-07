import * as React from "react";
import Image from "next/image";
import { Container, Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

import Head from "src/components/CommonHead";
import Title from "src/components/Title";
import Link from "src/components/Link";
import Copyright from "src/components/Copyright";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function Home() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Head
				title="Good today."
				description="I make vector points, polygons, keyframes and colorful monospace letters look neat."
				ogImg="index.png"
			/>
			<Title
				big
				top="Work in progress:"
				bottom="A rewrite in Next.js."
				body="I finally got myself learn more about Next.js and decided to rewrite my website with it. While the current site will still be around for some time, it'll likely not receive any major updates for now."
				src="https://media.pprmint.art/code.png"
			>
				<Image src="https://media.pprmint.art/code.png" layout="fill" />
			</Title>
			<Box
				sx={{
					mb: 8,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Button
					variant="outlined"
					component={Link}
                    scroll={false}
					noLinkStyle
					href="/project/mintcraft"
				>
					Go to Mintcraft page
				</Button>
			</Box>
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
				</Typography>
				<br />
				<Typography variant="h2">Lorem ipsum.</Typography>
				<Typography>
					Duis autem vel eum iriure dolor in hendrerit in vulputate
					velit esse molestie consequat, vel illum dolore eu feugiat
					nulla facilisis at vero eros et accumsan et iusto odio
					dignissim qui blandit praesent luptatum zzril delenit augue
					duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
					amet, consectetuer adipiscing elit, sed diam nonummy nibh
					euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat.
				</Typography>
				<br />
				<Typography variant="h2">Lorem ipsum.</Typography>
				<Typography>
					Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
					consequat. Duis autem vel eum iriure dolor in hendrerit in
					vulputate velit esse molestie consequat, vel illum dolore eu
					feugiat nulla facilisis at vero eros et accumsan et iusto
					odio dignissim qui blandit praesent luptatum zzril delenit
					augue duis dolore te feugait nulla facilisi.
				</Typography>
				<br />
				<Typography variant="h2">Lorem ipsum.</Typography>
				<Typography>
					Nam liber tempor cum soluta nobis eleifend option congue
					nihil imperdiet doming id quod mazim placerat facer possim
					assum. Lorem ipsum dolor sit amet, consectetuer adipiscing
					elit, sed diam nonummy nibh euismod tincidunt ut laoreet
					dolore magna aliquam erat volutpat. Ut wisi enim ad minim
					veniam, quis nostrud exerci tation ullamcorper suscipit
					lobortis nisl ut aliquip ex ea commodo consequat.
				</Typography>
				<br />
				<Typography variant="h2">Lorem ipsum.</Typography>
				<Typography>
					Duis autem vel eum iriure dolor in hendrerit in vulputate
					velit esse molestie consequat, vel illum dolore eu feugiat
					nulla facilisis.
				</Typography>
				<br />
				<Typography variant="h2">Lorem ipsum.</Typography>
				<Typography>
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
				</Typography>
				<br />
				<Typography variant="h2">Lorem ipsum.</Typography>
				<Typography>
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
				</Typography>
				<br />
				<Typography variant="h2">Lorem ipsum.</Typography>
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
				</Typography>
				<br />
				<Typography variant="h2">Lorem ipsum.</Typography>
				<Typography>
					Duis autem vel eum iriure dolor in hendrerit in vulputate
					velit esse molestie consequat, vel illum dolore eu feugiat
					nulla facilisis at vero eros et accumsan et iusto odio
					dignissim qui blandit praesent luptatum zzril delenit augue
					duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
					amet, consectetuer adipiscing elit, sed diam nonummy nibh
					euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat.
				</Typography>
				<br />
				<Typography variant="h2">Lorem ipsum.</Typography>
				<Typography>
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
		</motion.div>
	);
}
