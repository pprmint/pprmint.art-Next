import { Typography, Container, Box } from "@mui/material";
import styles from "./title.module.scss";

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
			<Container
				className={styles.titleContainer}
				maxWidth={false}
				sx={{
                    display: "flex",
                    alignItems: "center",
					overflow: "hidden",
					height: 500,
					mb: 8,
				}}
			>
				{props.children}
				<Container maxWidth="xl">
					<Box
						className="title"
						sx={{
							textShadow: "0 4px 10px #1115",
						}}
					>
						<Typography variant="h1top" color="text.secondary">
							{props.top}
						</Typography>
						<Typography variant="h1" gutterBottom>
							{props.bottom}
						</Typography>
						<Typography variant="body1" gutterBottom>
							{props.body}
						</Typography>
					</Box>
				</Container>
			</Container>
		);
	} else {
		return (
			<>
				<Container
					maxWidth={false}
					sx={{
						py: 8,
						maxWidth: "max-content",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Container className="title">
						<Typography variant="h1top" color="text.secondary">
							{props.top}
						</Typography>
						<Typography variant="h1" gutterBottom>
							{props.bottom}
						</Typography>
					</Container>
				</Container>
			</>
		);
	}
}
