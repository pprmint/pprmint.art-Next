import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { m } from "framer-motion";

import Head from "components/Head";

import { SectionContainer, Section } from "animations/sectionAnimations";

export default function Overview() {
	const t = useTranslations("Overview");
	return (
		<>
			<Head
				title={t("Head.title")}
				description={t("Head.description")}
			/>
			<m.div
				variants={SectionContainer}
				initial="hidden"
				animate="show"
				exit="exit"
				className="lg:grid lg:grid-cols-3 overflow-hidden"
			>
				<m.div
					variants={Section}
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
					variants={Section}
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
					variants={Section}
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
