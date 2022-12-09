import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { m } from "framer-motion";

import Head from "components/Head";

const ColumnContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0,
			staggerChildren: 0.05,
		},
	},
};
const Column = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			y: { duration: 0.75, ease: "circOut" },
			opacity: { duration: 0.25 },
		},
	},
	exit: {
		opacity: 0,
		y: -100,
		transition: { duration: 0.3, ease: "easeIn" },
	},
};

export default function Overview() {
	const t = useTranslations("Overview");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
				ogImg="gallery.png"
			/>
			<m.div
				variants={ColumnContainer}
				initial="hidden"
				animate="show"
				exit="exit"
				className="lg:grid lg:grid-cols-3 overflow-hidden"
			>
				<m.div
					variants={Column}
					className="flex justify-center h-[33.3vh] lg:h-screen relative"
				>
					<Image
						src="https://static.pprmint.art/works/2022/iPad/iPad.png"
						width={1920}
						height={1080}
						alt="Test image"
						className="z-0 object-cover opacity-25"
					/>
					<div className="absolute flex flex-col gap-3 text-center h-full w-full justify-center p-12">
						<h1 className="font-sans font-bold text-white text-5xl uppercase">
							Vectors
						</h1>
						<p className="font-sans text-white-dark2">This is sample text.</p>
					</div>
				</m.div>
				<m.div
					variants={Column}
					className="flex justify-center h-[33.3vh] lg:h-screen relative"
				>
					<Image
						src="https://static.pprmint.art/works/2022/PurpleQuartz/Purple_Quartz.png"
						width={1920}
						height={1080}
						alt="Test image"
						className="z-0 object-cover opacity-25"
					/>
					<div className="absolute flex flex-col gap-3 text-center h-full w-full justify-center p-12">
						<h1 className="font-sans font-bold text-white text-5xl uppercase">
							Polygons
						</h1>
						<p className="font-sans text-white-dark2">This is sample text.</p>
					</div>
				</m.div>
				<m.div
					variants={Column}
					className="flex justify-center h-[33.3vh] lg:h-screen relative"
				>
					<Image
						src="https://static.pprmint.art/images/code.png"
						width={1920}
						height={1080}
						alt="Test image"
						className="z-0 object-cover opacity-25"
					/>
					<div className="absolute flex flex-col gap-3 text-center h-full w-full justify-center p-12">
						<h1 className="font-sans font-bold text-white text-5xl uppercase">
							Code
						</h1>
						<p className="font-sans text-white-dark2">This is sample text.</p>
					</div>
				</m.div>
			</m.div>
		</>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`locales/${locale}/strings.json`)).default,
		},
	};
}
