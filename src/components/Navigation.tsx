import * as React from "react";
import {
	IconButton,
	AppBar,
	Toolbar,
	Box,
	Drawer,
	List,
	ListItem,
	useScrollTrigger,
	Button,
	Stack,
	Divider,
	ListItemIcon,
} from "@mui/material";
import theme from "../theme";
import Lottie from "react-lottie-player";
import wordmarkJson from "src/animations/wordmark.json";
import Link from "src/components/Link";

interface Props {
	children: React.ReactElement;
}

// Transparent app bar when at top of page, backdrop filter + divider line once scrolling down
function ElevationScroll(props: Props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});
	return React.cloneElement(children, {
		sx: trigger
			? {
					transition: ".15s",
					backdropFilter: "blur(15px) brightness(30%) contrast(90%)",
			  }
			: {
					transition: ".5s",
					backdropFilter: "blur(0px) brightness(100%) contrast(100%)",
			  },
	});
}
export default function Navigation() {
	return (
		<ElevationScroll>
			<AppBar
				color="transparent"
				elevation={0}
				sx={{ width: "50px" }}
			>
				<Toolbar>
					<Link href="/" scroll={false} sx={{ width: "max-content" }}>
						<Lottie
							loop={false}
							animationData={wordmarkJson}
							play
							style={{ height: 70 }}
						/>
					</Link>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
}
