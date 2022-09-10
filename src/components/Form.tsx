import * as React from "react";
import {
	Box,
	TextField,
	Stack,
	Button,
	Select,
	SelectChangeEvent,
	FormControl,
	InputLabel,
	MenuItem,
} from "@mui/material";
import { SendOutlined } from "@mui/icons-material";
import { useTranslations } from "next-intl";

const Subject = ["general", "commission", "privacy"]

export default function ContactForm() {
	const t = useTranslations("Form");
	const [subject, setSubject] = React.useState("");

	const handleSubject = (event: SelectChangeEvent) => {
		setSubject(event.target.value as string);
	};
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
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">{t("Subject.label")}</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={subject}
						label={t("Subject.label")}
						onChange={handleSubject}
					>
                        {Subject.map((subject) => (
                            <MenuItem value={subject}>{t("Subject."+subject)}</MenuItem>
                        ))}
					</Select>
				</FormControl>
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
				<Button variant="contained" endIcon={<SendOutlined />}>
					Submit nothing
				</Button>
			</Box>
		</Box>
	);
}
