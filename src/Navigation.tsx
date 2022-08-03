import { Box } from "@mui/material";
import Lottie from "react-lottie-player";
import wordmarkJson from "../animations/wordmark.json";
import Link from "../src/Link";

export default function Navigation() {
	return (
		<Box
			component={Link}
			noLinkStyle
			href="/"
			sx={{
                zIndex: 9999,
                position: "fixed",
                width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
                background: "#111a",
                backdropFilter: "blur(15px)",
                borderBottom: "1px solid #fff1",
			}}
		>
			<Lottie
				loop={false}
				animationData={wordmarkJson}
				play
				style={{ height: 70 }}
			/>
		</Box>
	);
}
