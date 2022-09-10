import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

function Gradient() {
	return (
		<Box
			width="100%"
			height="100%"
			position="absolute"
			zIndex={1}
			sx={{ backgroundImage: "linear-gradient(#1116, #111e)" }}
		/>
	);
}

function Wrapper(props: React.PropsWithChildren) {
	return (
		<Box
			position="absolute"
			zIndex={0}
			width="100vw"
			height="100vh"
			overflow="hidden"
		>
			<Gradient />
			{props.children}
		</Box>
	);
}

export function Motion() {
	return (
		<Wrapper>
			<motion.div
				animate={{ y: [0, -150, 0], x: [0, 100, 0] }}
				transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
				style={{
					position: "absolute",
					bottom: -250,
					right: -250,
					rotate: 34,
				}}
			>
				<Image
					src="/assets/home/motion/circle.svg"
					width={1000}
					height={1000}
					alt=""
					layout="fixed"
				/>
			</motion.div>
			<motion.div
				animate={{ y: [-150, 0, -150], x: [100, 0, 100] }}
				transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
				style={{
					position: "absolute",
					bottom: -350,
					right: -350,
					rotate: 34,
				}}
			>
				<Image
					src="/assets/home/motion/rectangle.svg"
					width={1000}
					height={1000}
					alt=""
					layout="fixed"
				/>
			</motion.div>
			<motion.div
				animate={{ y: [0, -150, 0], x: [0, 100, 0] }}
				transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
				style={{
					position: "absolute",
					top: -250,
					left: -450,
					rotate: 34,
				}}
			>
				<Image
					src="/assets/home/motion/whateverthefuckthisis.svg"
					width={1000}
					height={1000}
					alt=""
					layout="fixed"
				/>
			</motion.div>
			<motion.div
				animate={{ y: [-150, 0, -150], x: [100, 0, 100] }}
				transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
				style={{
					position: "absolute",
					top: -150,
					left: -350,
					rotate: 34,
				}}
			>
				<Image
					src="/assets/home/motion/diamond.svg"
					width={1000}
					height={1000}
					alt=""
					layout="fixed"
				/>
			</motion.div>
		</Wrapper>
	);
}

export function Code() {
	return (
		<Wrapper>
			<motion.div
				animate={{ rotate: [0, -360] }}
				transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
				style={{
					position: "absolute",
					top: -250,
					left: -550,
				}}
			>
				<Image
					src="/assets/home/code/tags.svg"
					width={900}
					height={900}
					alt=""
					layout="fixed"
				/>
			</motion.div>
			<motion.div
				animate={{ rotate: [0, 360] }}
				transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
				style={{
					position: "absolute",
					top: -250,
					left: -550,
				}}
			>
				<Image
					src="/assets/home/code/brackets.svg"
					width={900}
					height={900}
					alt=""
					layout="fixed"
				/>
			</motion.div>
			<motion.div
				animate={{ y: [0, 150, 0], x: [0, -50, 0] }}
				transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
				style={{
					position: "absolute",
					bottom: -50,
					right: -30,
					rotate: 10,
				}}
			>
				<Image
					src="/assets/home/code/semicolon.svg"
					width={207}
					height={770}
					alt=""
					layout="fixed"
				/>
			</motion.div>
		</Wrapper>
	);
}

export function Vector() {
	return (
		<Wrapper>
			<motion.div
				animate={{
					rotate: [0, -20, 0],
					y: [0, 50, 0],
					x: [0, -40, 40, 0],
				}}
				transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
				style={{
					position: "absolute",
					bottom: "10%",
					left: "10%",
				}}
			>
				<Image
					src="/assets/home/vector/square.svg"
					width={116}
					height={116}
					alt=""
					layout="fixed"
				/>
			</motion.div>
			<motion.div
				animate={{
					rotate: [0, 45, 0],
					y: [0, 50, 0],
					x: [0, 20, -20, 0],
				}}
				transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
				style={{
					position: "absolute",
					bottom: "20%",
					right: -100,
				}}
			>
				<Image
					src="/assets/home/vector/circle.svg"
					width={245}
					height={245}
					alt=""
					layout="fixed"
				/>
			</motion.div>
			<motion.div
				animate={{
					rotate: [0, 15, 0],
					y: [0, 50, 0],
					x: [0, -50, 50, 0],
				}}
				transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
				style={{
					position: "absolute",
					top: "5%",
					left: -20,
				}}
			>
				<Image
					src="/assets/home/vector/curve.svg"
					width={118}
					height={209}
					alt=""
					layout="fixed"
				/>
			</motion.div>
			<motion.div
				animate={{
					rotate: [0, -45, 0],
					y: [0, 50, 0],
					x: [0, 60, -60, 0],
				}}
				transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
				style={{
					position: "absolute",
					top: "15%",
					left: "40%",
				}}
			>
				<Image
					src="/assets/home/vector/triangle.svg"
					width={188}
					height={166}
					alt=""
					layout="fixed"
				/>
			</motion.div>
			<motion.div
				animate={{
					rotate: [0, 35, 0],
					y: [0, 50, 0],
					x: [0, 30, -30, 0],
				}}
				transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
				style={{
					position: "absolute",
					top: 50,
					right: "10%",
				}}
			>
				<Image
					src="/assets/home/vector/line.svg"
					width={190}
					height={23}
					alt=""
					layout="fixed"
				/>
			</motion.div>
			<motion.div
				animate={{
					x: [0, 300, 100, -100, 0],
					y: [0, -100, 0, 100, 50, 0],
				}}
				transition={{
					x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
					y: { duration: 45, repeat: Infinity, ease: "easeInOut" },
				}}
				style={{
					position: "absolute",
					bottom: 200,
					right: "25%",
				}}
			>
				<Image
					src="/assets/home/vector/cursor.svg"
					width={47}
					height={61}
					alt=""
					layout="fixed"
				/>
			</motion.div>
		</Wrapper>
	);
}
