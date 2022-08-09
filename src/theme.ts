import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
	typography: {
		allVariants: {
			lineHeight: 1.6,
			color: "#eeeeeec4",
			fontFamily: "'Basier Circle', Roboto, Helvetica, Arial, sans-serif",
		},
		h1: {
			fontFamily: "Silka, Roboto, Helvetica, Arial, sans-serif",
			color: "#eee",
			fontWeight: "600",
			lineHeight: "1",
		},
		h1top: {
            fontWeight: "300",
			fontStyle: "italic",
			fontSize: "2rem",
			lineHeight: "1",
		},
		h2: {
            fontFamily: "Silka, Roboto, Helvetica, Arial, sans-serif",
			fontWeight: 500,
            color: "#eee",
		},
		h3: {
            fontFamily: "Silka, Roboto, Helvetica, Arial, sans-serif",
			fontWeight: 500,
            color: "#eee",
		},
		h4: {
            fontFamily: "Silka, Roboto, Helvetica, Arial, sans-serif",
			fontWeight: 500,
            color: "#eee",
		},
		h5: {
            fontFamily: "Silka, Roboto, Helvetica, Arial, sans-serif",
			fontWeight: 500,
            color: "#eee",
		},
		h6: {
            fontFamily: "Silka, Roboto, Helvetica, Arial, sans-serif",
			fontWeight: 500,
            color: "#eee",
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
				outlined: {
					borderWidth: "2px !important",
				},
			},
		},
        MuiLink: {
            styleOverrides: {
                root: {
                    transition: "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    fontWeight: 600,
                    textDecorationThickness: 2,
                },
            },
        },
	},
	palette: {
		mode: "dark",
		background: {
			default: "#111",
			paper: "#222",
		},
		text: {
			primary: "#eee",
			secondary: "#eeeeeec4",
		},
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
