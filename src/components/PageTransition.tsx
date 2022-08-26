import React from "react";
import { motion } from "framer-motion";

// Tweak animations here to update transitions between all pages.
export default function PageTransition(props: React.PropsWithChildren) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				// y: 20,
			}}
			animate={{
                opacity: 1,
                // y: 0,
				transition: { duration: 0.5, ease: "circOut" },
			}}
			exit={{
				opacity: 0,
				// y: -20,
				transition: { duration: 0.195, ease: "circIn" },
			}}
		>
			{props.children}
		</motion.div>
	);
}
