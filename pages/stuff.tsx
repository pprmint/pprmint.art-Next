import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import * as Accordion from "@radix-ui/react-accordion";

import DesktopScreenshot from "public/assets/stuff/desktop.jpg";
import LaptopScreenshot from "public/assets/stuff/laptop.jpg";

import Head from "components/Head";

import { CaretDown } from "phosphor-react";
import Image from "next/image";

const Caret = (
	<CaretDown
		size={24}
		weight="bold"
		className="text-white-dark2 group-data-[state='open']/root:rotate-180 group-hover/root:text-white group-data-[state='open']/root:text-white duration-250 ease-out ml-auto"
		aria-hidden
	/>
);

export default function Stuff() {
	const t = useTranslations("Stuff");
	const AccordionTrigger =
		"font-display font-bold text-white text-3xl pb-3 flex w-full items-center data-[state='open']:pb-6 duration-250";
	const TableRoot =
		"w-full table-fixed divide-y divide-dashed divide-black-light2 border border-black-light2";
	const TableRow = "even:bg-black-light1";
	const TableCell = "p-2";
	return (
		<>
			<Head title={t("Head.title")} description={t("Head.description")} />
			<main className="py-40 max-w-7xl mx-auto px-6 md:px-9 font-sans text-white-dark2">
				<div className="pb-12 text-center">
					<h1 className="font-display font-bold text-white text-4xl md:text-5xl xl:text-7xl pb-3">
						{t("Head.title")}
					</h1>
				</div>
				<Accordion.Root type="multiple">
					<Accordion.Item value="desktop" className="group/root">
						<Accordion.Trigger className={AccordionTrigger}>
							{t("Content.Computers.heading")}
							{Caret}
						</Accordion.Trigger>
						<Accordion.Content className="data-[state='open']:animate-slide-down data-[state='closed']:animate-slide-up overflow-hidden">
							<div className="pb-9">
								<h2 className="text-xl font-bold text-white pb-3">
									{t("Content.Computers.Desktop.heading")}
								</h2>
								<Image
									src={DesktopScreenshot}
									alt="Desktop screenshot"
									className="w-full h-auto"
								/>
								<table className={TableRoot}>
									<tr className={TableRow}>
										<td className={TableCell}>Operating system</td>
										<td className={TableCell}>Windows 11</td>
									</tr>
									<tr className={TableRow}>
										<td className={TableCell}>Primary monitor</td>
										<td className={TableCell}>w i d e</td>
									</tr>
									<tr className={TableRow}>
										<td className={TableCell}>Secondary monitor</td>
										<td className={TableCell}>
											v<br />e<br />r<br />t<br />i<br />c<br />a<br />l
										</td>
									</tr>
									<tr className={TableRow}>
										<td className={TableCell}>GPU</td>
										<td className={TableCell}>Windows 95</td>
									</tr>
									<tr className={TableRow}>
										<td className={TableCell}>CPU</td>
										<td className={TableCell}>IBM OS/2 Warp</td>
									</tr>
								</table>
							</div>
							<div>
								<h2 className="text-xl font-bold text-white pb-3">
									{t("Content.Computers.Laptop.heading")}
								</h2>
								<Image
									src={LaptopScreenshot}
									alt="Laptop screenshot"
									className="w-full h-auto pb-3"
								/>
								<table className={TableRoot}>
									<tr className={TableRow}>
										<td className={TableCell}>Operating system</td>
										<td className={TableCell}>Tetris</td>
									</tr>
									<tr className={TableRow}>
										<td className={TableCell}>CPU</td>
										<td className={TableCell}>Intel Pentium</td>
									</tr>
								</table>
							</div>
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
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
