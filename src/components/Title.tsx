import { Typography, Container, Grid } from "@mui/material";
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
                    overflow: "hidden",
					height: 500,
					display: "flex",
					alignItems: "center",
					mb: 8,
				}}
			>
				{props.children}
				<Grid
					container
					spacing={0}
					maxWidth="xl"
					sx={{
						margin: "0 auto",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Grid
						item
						sm={12}
						md={7}
						className="title"
						sx={{ textShadow: "0 4px 10px #1115" }}
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
					</Grid>
					<Grid
						item
						sm={12}
						md={5}
						mt={{ md: 8, xs: 2 }}
						sx={{ display: "flex", justifyContent: "right" }}
					>
						fgsfds
					</Grid>
				</Grid>
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
