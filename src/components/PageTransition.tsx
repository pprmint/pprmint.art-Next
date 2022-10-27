import React from "react";
import { motion } from "framer-motion";

export default function PageTransition(props: React.PropsWithChildren) {
	return (
		<motion.div
			initial={{
                opacity: 0,
				x: 40,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			}}
			animate={{
                opacity: 1,
                x: 0,
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				transition: { duration: 0.5, ease: "circOut" },
			}}
			exit={{
                opacity: 0,
				x: -20,
				clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
				transition: { duration: 0.3, ease: "easeIn" },
			}}
		>
			{props.children}
		</motion.div>
	);
}
