import * as React from "react";
import { Typography, Divider } from "@mui/material";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
	return (
		<>
			<Divider sx={{ my: 2 }} />
			<Typography variant="body2" color="text.secondary" align="center">
				{"© "}
				{new Date().getFullYear()}{" "}
				<MuiLink color="inherit" href="https://mui.com/">
					pprmint.
				</MuiLink>
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				Looking for a finished website?{" "}
				<MuiLink color="secondary" href="https://pprmint.art/">
					Click here.
				</MuiLink>
			</Typography>
		</>
	);
}
