import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
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
	typography: {
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
        body1: {
            lineHeight: 1.6,
            color: "#eeeeeec4",
            fontFamily: "'Basier Circle', Roboto, Helvetica, Arial, sans-serif",
        },
        body2: {
            lineHeight: 1.6,
            color: "#eeeeeec4",
            fontFamily: "'Basier Circle', Roboto, Helvetica, Arial, sans-serif",
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
        MuiPaper: {
			styleOverrides: {
				elevation0: {
					background: "var(--backgroundPrimary)",
				},
				elevation1: {
					background: "var(--backgroundSecondary)",
				},
				elevation2: {
					background: "var(--backgroundTertiary)",
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
                sizeLarge: {
                    borderRadius: 22,
                },
                sizeMedium: {
                    borderRadius: 20,
                },
                sizeSmall: {
                    paddingRight: 16,
                    paddingLeft: 16,
                },
			},
		},
		MuiToggleButton: {
			styleOverrides: {
				root: {
					borderWidth: "2px !important",
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					transition: "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
					fontWeight: 600,
					textDecorationThickness: 1,
                    textUnderlineOffset: 2,
					"&:hover": {
						textDecorationThickness: 2,
					},
				},
			},
		},
	},
    shape: {
        borderRadius: 8,
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
