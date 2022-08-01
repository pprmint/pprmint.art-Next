import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
	typography: {
        fontFamily: "Noway",
		h1: {
            fontWeight: "700",
            color: "#eee",
		},
		h1top: {
            color: "#bbb",
			fontFamily: "N27",
			fontWeight: "300",
			fontStyle: "italic",
            fontSize: "2.5rem",
            textTransform: "uppercase",
		},
        button: {
            fontFamily: "N27",
            lineHeight: "1.6rem",
        },
	},
    components: {
		MuiSkeleton: {
			styleOverrides: {
				root: {
                    backgroundColor: "transparent",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				outlined: {
					borderWidth: "2px !important",
				},
			},
		},
    },
	palette: {
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

// theme = responsiveFontSizes(theme);

export default theme;
