export const FadeContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.02,
		},
	},
};
export const Fade = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
};
