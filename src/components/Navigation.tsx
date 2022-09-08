import * as React from "react";
import { GetStaticPropsContext } from "next";
import { Router, useRouter } from "next/router";
import {
	AppBar,
	Fab,
	Box,
	useScrollTrigger,
	Zoom,
	BottomNavigation,
	BottomNavigationAction,
	IconButton,
	Paper,
	Stack,
	Tooltip,
	Toolbar,
} from "@mui/material";
import Lottie from "react-lottie-player";
import wordmarkJson from "src/animations/wordmark.json";

import { NextLinkComposed } from "src/components/Link";
import Link from "src/components/Link";

import {
	FiChevronUp,
	FiHome,
	FiImage,
	FiPackage,
	FiMail,
} from "react-icons/fi";
import {
	HomeOutlined,
	HomeTwoTone,
	ImageOutlined,
	ImageTwoTone,
	FolderZipOutlined,
	FolderZipTwoTone,
	MailOutlined,
	MailTwoTone,
} from "@mui/icons-material";

const Links = [
	{
		name: "Home",
		path: "/",
		outlinedIcon: <HomeOutlined />,
		filledIcon: <HomeTwoTone />,
	},
	{
		name: "Gallery",
		path: "/gallery",
		outlinedIcon: <ImageOutlined />,
		filledIcon: <ImageTwoTone />,
	},
	{
		name: "Projects",
		path: "/projects",
		outlinedIcon: <FolderZipOutlined />,
		filledIcon: <FolderZipTwoTone />,
	},
	{
		name: "Contact",
		path: "/contact",
		outlinedIcon: <MailOutlined />,
		filledIcon: <MailTwoTone />,
	},
];

function ScrollTop() {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 75,
	});

	return (
		<Zoom in={trigger}>
			<Box
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				sx={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999 }}
			>
				<Fab size="large" aria-label="scroll back to top">
					<FiChevronUp />
				</Fab>
			</Box>
		</Zoom>
	);
}

export default function Navigation() {
	const router = useRouter();
	return (
		<>
			{/* Desktop navigation */}
			<AppBar
				color="transparent"
				elevation={0}
				sx={{
					backgroundImage: "linear-gradient(#111f, #1110)",
				}}
			>
				<Toolbar>
					<Box display="flex" justifyContent="left" flexGrow={1}>
						<Link href="/" scroll={false}>
							<Lottie
								loop={false}
								animationData={wordmarkJson}
								play
								style={{ height: 70 }}
							/>
						</Link>
					</Box>
					<Box sx={{ display: "flex" }}>
						<Stack spacing={1} direction="row">
							{Links.map((link) => (
								<IconButton
									color={router.pathname === link.path ? "primary" : "inherit"}
									component={Link}
									href={link.path}
									scroll={false}
									aria-label={link.name}
									key={link.path}
								>
									{router.pathname === link.path
										? link.filledIcon
										: link.outlinedIcon}
								</IconButton>
							))}
						</Stack>
					</Box>
				</Toolbar>
			</AppBar>
			{/* Mobile navigation */}
			{/* <Box
                sx={{
                    backgroundColor: "var(--backgroundSecondary)",
                    display: { xs: "static", sm: "none" },
                    position: "fixed",
                    bottom: "0",
                    width: "100%",
                    zIndex: 9999,
                }}
            >
                <BottomNavigation value={router.pathname}>
                    {Links.map((link) => (
                        <BottomNavigationAction
                            component={NextLinkComposed}
                            key={link.path}
                            to={link.path}
                            scroll={false}
                            label={link.name}
                            icon={
                                router.pathname === link.path
                                    ? link.filledIcon
                                    : link.outlinedIcon
                            }
                            value={link.path}
                        />
                    ))}
                </BottomNavigation>
            </Box> */}
			{/* <ScrollTop />*/}
		</>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
