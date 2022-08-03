import { Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

export default function Title(
	props: React.PropsWithChildren<{
		top: string;
		bottom: string;
		big?: boolean;
		body?: string;
		src?: string;
	}>
) {
	if (props.big) {
		return (
			<Container
				maxWidth={false}
				sx={{
					backgroundImage: "url(" + props.src + ")",
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: 500,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Container
					className="title"
					maxWidth="xl"
					sx={{ textShadow: "0 4px 10px #1115" }}
				>
					<Typography variant="h1top">{props.top}</Typography>
					<Typography variant="h1" gutterBottom>{props.bottom}</Typography>
					<Typography variant="body1">{props.body}</Typography>
				</Container>
			</Container>
		);
	} else {
		return (
			<>
				<Container className="title" maxWidth="lg" sx={{ pt: 50 }}>
					<Typography variant="h1top">{props.top}</Typography>
					<Typography variant="h1" gutterBottom>{props.bottom}</Typography>
				</Container>
			</>
		);
	}
}
