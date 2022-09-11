import * as React from "react";
import {
	Box,
	Typography,
	TextField,
	Stack,
	Button,
	Select,
	SelectChangeEvent,
	FormControl,
	InputLabel,
	MenuItem,
	Alert,
	Collapse,
	useMediaQuery,
	useTheme,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	Divider,
	Snackbar,
	Card,
} from "@mui/material";
import { InfoOutlined, SendOutlined } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Subject = ["general", "commission", "privacy"];

export default function ContactForm() {
	const t = useTranslations("Contact.Form");

	// Subject selection
	const [subject, setSubject] = React.useState("");
	const handleSubject = (event: SelectChangeEvent) => {
		setSubject(event.target.value as string);
	};

	// Commission info dialog
	const [openDialog, setDialogOpen] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
	const handleClickOpen = () => {
		setDialogOpen(true);
	};
	const handleDialogClose = () => {
		setDialogOpen(false);
	};

	// Funny snackbar
	const [openSnackbar, setSnackbarOpen] = React.useState(false);
	const handleSnackbarOpen = () => {
		setSnackbarOpen(true);
	};
	const handleSnackbarClose = () => {
		setSnackbarOpen(false);
	};

	// uhh
	function radius() {
		if (subject === "commission") return "8px 8px 0px 0px";
		return "8";
	}

	return (
		<Box component="form">
			<Stack spacing={2}>
				<TextField
					required
					id="name"
					label={t("Name.label")}
					variant="outlined"
					placeholder={t("Name.placeholder")}
				/>
				<TextField
					required
					id="email"
					label={t("Email.label")}
					variant="outlined"
					placeholder={t("Email.placeholder")}
				/>
				<FormControl>
					<InputLabel id="demo-simple-select-label">
						{t("Subject.label")}
					</InputLabel>
					<Select
						sx={{ borderRadius: radius }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={subject}
						label={t("Subject.label")}
						onChange={handleSubject}
					>
						{Subject.map((subject) => (
							<MenuItem key={subject} value={subject}>
								{t("Subject." + subject)}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				{subject === "commission" && (
					<>
						<Box
							display="flex"
							flexDirection={{ xs: "column", md: "row" }}
							alignItems="center"
							p={1}
							textAlign={{ xs: "center", md: "left" }}
							mt="0px !important"
							sx={{
								border: "2px solid #333",
								borderTop: 0,
								borderRadius: "0 0 5px 5px",
							}}
						>
							<InfoOutlined color="secondary" />
							<Typography sx={{ flexGrow: 1, mx: 1 }}>
								{t("Subject.commissionAlert")}
							</Typography>
							<Button
								color="secondary"
								variant="contained"
								size="small"
								onClick={handleClickOpen}
								sx={{ my: { xs: 1, md: 0 } }}
							>
								{t("Subject.commissionAlertButton")}
							</Button>
						</Box>
						{/* This is a divider */}
						<Dialog
							fullScreen={fullScreen}
							open={openDialog}
							onClose={handleDialogClose}
							aria-labelledby="responsive-dialog-title"
						>
							<DialogTitle id="responsive-dialog-title">
								{t("Subject.Dialog.title")}
							</DialogTitle>
							<DialogContent dividers>
								<Typography variant="h4">
									{t("Subject.Dialog.General.title")}
								</Typography>
								<Typography variant="body1">
									{t("Subject.Dialog.General.text")}
								</Typography>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleDialogClose} autoFocus>
									{t("Subject.Dialog.oki")}
								</Button>
							</DialogActions>
						</Dialog>
					</>
				)}
				<TextField
					multiline
					rows={4}
					required
					id="name"
					label={t("Message.label")}
					variant="outlined"
					placeholder={t("Message.placeholder")}
				/>
			</Stack>
			<Box mt={3} display="flex" justifyContent="right">
				<Button
					size="large"
					variant="contained"
					endIcon={<SendOutlined />}
					onClick={handleSnackbarOpen}
				>
					{t("submit")}
				</Button>
			</Box>
			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={handleSnackbarClose}
				message={t("submitSnackbar")}
				action={
					<Button size="small" onClick={handleSnackbarClose}>
						{t("submitSnackbarButton")}
					</Button>
				}
			/>
		</Box>
	);
}
