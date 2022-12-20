export const SectionContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.03,
		},
	},
};
export const Section = {
	hidden: {
		y: 50,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: 0.6, ease: "circOut" },
			opacity: { duration: 0.3 },
		},
	},
	exit: {
		y: -50,
		opacity: 0,
		transition: { duration: 0.3, ease: "easeIn" },
	},
};