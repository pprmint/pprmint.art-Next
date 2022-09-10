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
		allVariants: {
			fontFamily: "'Basier Circle', Roboto, Helvetica, Arial, sans-serif",
            fontFeatureSettings: "'ss01'",
		},
		h1: {
			fontFamily: "Novela, Georgia, Times, serif",
			color: "#eee",
			fontWeight: 900,
            fontFeatureSettings: "'liga'",
			lineHeight: 1,
		},
		h2: {
			fontFamily: "Novela, Georgia, Times, serif",
			fontWeight: 600,
			color: "#eee",
			marginBottom: "8px",
		},
		h3: {
			fontFamily: "Novela, Georgia, Times, serif",
			fontWeight: 600,
			color: "#eee",
			marginBottom: "8px",
		},
		h4: {
			fontFamily: "Novela, Georgia, Times, serif",
			fontWeight: 600,
			color: "#eee",
			marginBottom: "8px",
		},
		h5: {
			fontFamily: "Novela, Georgia, Times, serif",
			fontWeight: 600,
			color: "#eee",
			marginBottom: "8px",
		},
		h6: {
			fontFamily: "Novela, Georgia, Times, serif",
			fontWeight: 600,
			color: "#eee",
			marginBottom: "8px",
		},
		body1: {
			lineHeight: 1.6,
			color: "#eeeeeec4",
		},
		body2: {
			lineHeight: 1.6,
			color: "#eeeeeec4",
		},
		button: {
			lineHeight: 1.6,
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
					backgroundImage: "none !important",
				},
				elevation1: {
					background: "var(--backgroundSecondary)",
					backgroundImage: "none !important",
				},
				elevation2: {
					background: "var(--backgroundTertiary)",
					backgroundImage: "none !important",
				},
				outlined: {
					borderWidth: "2px !important",
				},
			},
		},
		MuiDivider: {
			styleOverrides: {
				root: {
					borderBottomWidth: 2,
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
					borderRadius: 16,
					paddingRight: 16,
					paddingLeft: 16,
				},
			},
		},
		MuiBottomNavigationAction: {
			styleOverrides: {
				root: {
					fontFamily: "'Basier Circle', Roboto, Helvetica, Arial, sans-serif",
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
					textDecorationThickness: 2,
					textUnderlineOffset: 1.5,
				},
			},
		},
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderWidth: 2,
                    borderColor: "#333",
                    '&:hover': {
                        borderColor: "#444 !important",
                    },
                },
            },
        },
	},
	shape: {
		borderRadius: 8,
	},
});

theme = responsiveFontSizes(theme);

export default theme;
