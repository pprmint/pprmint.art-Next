import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
	typography: {
		fontFamily:
			"Noway, Roboto, 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, sans-serif",
		h1: {
			fontWeight: "700",
			lineHeight: "1",
		},
		h1top: {
            color: "secondaryText",
			fontFamily:
				"N27, Roboto, 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, sans-serif",
			fontWeight: "300",
			fontStyle: "italic",
			fontSize: "2rem",
            lineHeight: "1",
		},
		button: {
			fontFamily: "N27",
		},
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				gutterBottom: {
					marginBottom: 18,
				},
			},
		},
		MuiSkeleton: {
			styleOverrides: {
				root: {
					backgroundColor: "transparent",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				sizeSmall: {
					paddingBottom: 2,
				},
				sizeMedium: {
					paddingBottom: 3,
				},
				sizeLarge: {
					paddingBottom: 4,
				},
				outlined: {
					borderWidth: "2px !important",
				},
			},
		},
	},
	palette: {
		text: {
			primary: "#eee",
			secondary: "#eeea",
		},
		mode: "dark",
		// Green
		primary: {
			main: "#0c6",
			dark: "#095",
		},
		success: {
			main: "#0c6",
			dark: "#095",
		},
		// Blue
		secondary: {
			main: "#19f",
			dark: "#17c",
		},
		info: {
			main: "#19f",
			dark: "#17c",
		},
		// Yellow
		warning: {
			main: "#fb2",
			dark: "#d92",
		},
		// Red
		error: {
			main: "#f34",
			dark: "#b23",
		},
	},
});

declare module "@mui/material/styles" {
	interface TypographyVariants {
		h1top: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		h1top?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		h1top: true;
	}
}

theme = responsiveFontSizes(theme);

export default theme;
