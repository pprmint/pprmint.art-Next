import * as React from "react";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import * as Slider from "@radix-ui/react-slider";

import Head from "components/Head";
import { ArrowsOut, Article } from "phosphor-react";

import { SectionContainer, Section } from "animations/sectionAnimations";
import { FadeContainer, Fade } from "animations/fadeAnimations";

// To do: Move data to JSON file and import from there. Less messy overall then.
const Works2022 = [
	{
		caption: "Blossom",
		src: "https://static.pprmint.art/works/2022/Blossom/3D_Blossom_alt_Post2.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOscA35DwAEYAISA/VyngAAAABJRU5ErkJggg==",
		width: 3840,
		height: 2160,
		tumblr: "https://blog.pprmint.art/post/701659309102202880/awfiquily-rev-2",
	},
	{
		caption: "Purple Quartz",
		src: "https://static.pprmint.art/works/2022/PurpleQuartz/Purple_Quartz.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMta/+DwAEMAIYH14umAAAAABJRU5ErkJggg==",
		width: 3840,
		height: 2160,
		tumblr: "https://blog.pprmint.art/post/701202293755953152/purple-quartz",
	},
	{
		caption: "Landscape",
		src: "https://static.pprmint.art/works/2022/Landscape/Landscape.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsKan8DwAFJwJi2lLHfwAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Pimples",
		src: "https://static.pprmint.art/works/2022/Pimples/Confusing_POST.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUEhL4DwABpwE1wrSuHQAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Pyramid",
		src: "https://static.pprmint.art/works/2022/Pyramid/pyramid.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0Vyn+DwADVwHXFVegmgAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Platonic",
		src: "https://static.pprmint.art/works/2022/Platonic/platonic_edit_mirrored.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUNFb+DwACLAFoF1fa3wAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Next.js",
		src: "https://static.pprmint.art/works/2022/Nextjs/NextJS.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkkPP/DwACAQFuxXoefQAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "what",
		src: "https://static.pprmint.art/works/2022/What/whatb.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsrTzwHwAFyAKvBZZt1gAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Solar System 2",
		src: "https://static.pprmint.art/works/2022/SolarSystem/Solar_System_2.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0ctT/DwADMgGzY1TPcgAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Flap",
		src: "https://static.pprmint.art/works/2022/Flap/Flap.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsPPvvPwAHcANNlsBOAgAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Swirl",
		src: "https://static.pprmint.art/works/2022/Swirl/Swirl_1080p_E.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMs95z4HwAE4gJSNSIlJwAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Lights",
		src: "https://static.pprmint.art/works/2022/Lights/N-720.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkUrD4DwACAQFjqUq7jwAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Book",
		src: "https://static.pprmint.art/works/2022/Book/Cover-720.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUFhL4DwABqwE2D0tXzwAAAABJRU5ErkJggg==",
		width: 2481,
		height: 3508,
	},
	{
		caption: "MINT",
		src: "https://static.pprmint.art/works/2022/MintBanners/MINT_Night-720.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMU/A8AAScBEsBwhbUAAAAASUVORK5CYII=",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Wii remake",
		src: "https://static.pprmint.art/works/2022/WiiRemake/WiiRemake-720.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8++fPfwAJ6QP2LpIhtgAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Geoballs",
		src: "https://static.pprmint.art/works/2022/Geoices/geoballs-720.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUlXf8DwACfAGG83/Z/gAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "SUSE rebrand concept",
		src: "https://static.pprmint.art/works/2022/SUSE/suse-720.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0t7H/DwADFwGzqTOkAQAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Statistics",
		src: "https://static.pprmint.art/works/2022/Statistics/statistics-720.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMU+g8AASkBE945rRMAAAAASUVORK5CYII=",
		width: 2000,
		height: 2000,
	},
	{
		caption: "iPad",
		src: "https://static.pprmint.art/works/2022/iPad/iPad-720.png",
		blurData:
			"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNU+Q8AAU0BJUYogwYAAAAASUVORK5CYII=",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Arch wallpaper",
		src: "https://static.pprmint.art/works/2022/ArchWall/Arch_Qogir-720.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUkVX8DwACEgFb11SrOwAAAABJRU5ErkJggg==",
		width: 1920,
		height: 1080,
	},
	{
		caption: "Ford rebrand concept",
		src: "https://static.pprmint.art/works/2022/Ford/Ford-720.png",
		blurData:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",
		width: 1920,
		height: 1080,
	},
];

export default function Gallery() {
	const t = useTranslations("Gallery");
	const [cols, setCols] = React.useState([2]);
	const gridCols = `grid-cols-${cols}`;
	return (
		<>
			<Head title={t("Head.title")} description={t("Head.description")} />
			<main className="py-40 font-sans text-white-dark2">
				<m.div
					variants={SectionContainer}
					initial="hidden"
					whileInView="show"
					exit="exit"
				>
					<m.div variants={Section} className="py-5">
						<section className="px-6 md:px-9 flex items-center flex-col md:flex-row">
							<h1 className="font-bold text-white text-5xl md:text-6xl pb-3 flex-grow">
								{t("Head.title")}
							</h1>
							<div className="flex flex-col w-full md:max-w-xl">
								<span className="mb-3 text-right">
									{t("Content.gridSize")}:{" "}
									<span className="text-white font-bold">{cols}</span>
								</span>
								<Slider.Root
									className="group relative flex items-center select-none touch-none w-full rounded-full"
									value={cols}
									onValueChange={setCols}
									min={1}
									max={6}
									step={1}
								>
									<Slider.Track className="relative duration-200 ease-out bg-green-dark3 flex-grow h-0.5 group-hover:h-3 rounded-full">
										<Slider.Range className="absolute top-1/2 -translate-y-1/2 bg-green h-3 rounded-full group-hover:rounded-l-full" />
									</Slider.Track>
									<Slider.Thumb className="block duration-100 h-0 group-hover:h-5 w-0 group-hover:w-5 bg-green ring-0 group-hover:ring-8 ring-black rounded-full outline-none" />
								</Slider.Root>
							</div>
						</section>
					</m.div>
					<m.div variants={Section}>
						<m.div
							variants={FadeContainer}
							initial="hidden"
							whileInView="show"
							className={"py-5 grid " + gridCols}
						>
							{Works2022.map((Work) => (
								<m.div
									variants={Fade}
									key={Work.caption}
									className="aspect-video relative group overflow-hidden"
								>
									<div
										className="absolute w-full h-full flex items-end opacity-0 hover:opacity-100 focus:opacity-100 duration-300 backdrop-blur-sm backdrop-saturate-0 ring-inset ring hover:ring-2 ring-black-light2"
										style={{
											background:
												"linear-gradient(to bottom right, #222F 0%, #2225 50%, #222F 100%)",
										}}
									>
										<div className="flex flex-col w-full h-full">
											<div className="p-3 sm:p-6 md:p-9 -translate-y-6 group-hover:translate-y-0 duration-300 ease-out">
												<h2 className="text-white font-bold text-xl md:text-4xl">
													{Work.caption}
												</h2>
											</div>
											<div className="self-end mt-auto p-1.5 sm:p-3 md:p-6 gap-1 translate-y-6 group-hover:translate-y-0 duration-300 ease-out">
												<Link href={Work.src} target="_blank">
													<button className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90">
														<ArrowsOut weight="bold" />
													</button>
												</Link>
												{Work.tumblr && (
													<Link href={Work.tumblr} target="_blank">
														<button className="p-3 hover:bg-black-light2 rounded-full duration-75 active:scale-90">
															<Article weight="bold" />
														</button>
													</Link>
												)}
											</div>
										</div>
									</div>
									<Image
										src={Work.src}
										width={Work.width}
										height={Work.height}
										alt={Work.caption}
										placeholder="blur"
										blurDataURL={Work.blurData}
										className="h-full object-cover"
									/>
								</m.div>
							))}
						</m.div>
					</m.div>
				</m.div>
			</main>
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
