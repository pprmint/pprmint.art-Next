import { AppBar, Fab, Box, useScrollTrigger, Zoom } from "@mui/material";
import { FiChevronUp } from "react-icons/fi";
import Lottie from "react-lottie-player";
import wordmarkJson from "src/animations/wordmark.json";
import Link from "src/components/Link";

function ScrollTop() {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 75,
	});

	return (
		<Zoom in={trigger}>
			<Box
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				sx={{ position: "fixed", bottom: 24, right: 24 }}
			>
				<Fab size="medium" aria-label="scroll back to top">
					<FiChevronUp />
				</Fab>
			</Box>
		</Zoom>
	);
}

export default function Navigation() {
	return (
		<>
			<AppBar
				color="transparent"
				elevation={0}
				style={{
					position: "absolute",
					zIndex: 9999,
					backgroundImage: "linear-gradient(#111f, #1110)",
				}}
			>
				<Link href="/" scroll={false}>
					<Lottie
						loop={false}
						animationData={wordmarkJson}
						play
						style={{ height: 75, width: "min-width" }}
					/>
				</Link>
			</AppBar>
			<ScrollTop />
		</>
	);
}
