import { Typography, Container, Box } from "@mui/material";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

export default function Title(
	props: React.PropsWithChildren<{
		top: string;
		bottom: string;
		big?: boolean;
		body?: string;
		src?: string;
		topLevel?: string;
	}>
) {
	if (props.big) {
		return (
			<ParallaxBanner
				layers={[
					{
						image: props.src,
						speed: -20,
						opacity: [0.75, 0.2],
					},
				]}
				style={{
					minHeight: 600,
					marginBottom: 64,
					display: "flex",
					alignItems: "center",
					overflow: "hidden",
				}}
			>
				<Container maxWidth="xl">
					<Box
						sx={{
							animation: "shiftFromRight 1s var(--easeOut) forwards",
						}}
					>
						<Parallax speed={-10}>
							<Typography
								variant="h1top"
								color="text.secondary"
								sx={{ textShadow: "0 4px 10px #1115" }}
							>
								{props.top}
							</Typography>
							<Typography
								variant="h1"
								gutterBottom
								sx={{
									animation: "shiftFromRight 1s var(--easeOut) forwards",
									textShadow: "0 4px 10px #1115",
								}}
							>
								{props.bottom}
							</Typography>
							<Typography variant="body1" gutterBottom>
								{props.body}
							</Typography>
							<Box sx={{ display: "flex", justifyContent: "right" }}>
								{props.children}
							</Box>
						</Parallax>
					</Box>
				</Container>
			</ParallaxBanner>
		);
	} else {
		return (
			<>
				<Container
					maxWidth={false}
					sx={{
						mt: 10,
						py: 8,
						maxWidth: "max-content",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Container
						sx={{ animation: "shiftFromRight 1s var(--easeOut) forwards" }}
					>
						<Typography variant="h1top" color="text.secondary">
							{props.top}
						</Typography>
						<Typography
							variant="h1"
							gutterBottom
							sx={{ animation: "shiftFromRight 1s var(--easeOut) forwards" }}
						>
							{props.bottom}
						</Typography>
					</Container>
				</Container>
			</>
		);
	}
}
