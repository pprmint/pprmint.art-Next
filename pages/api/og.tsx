import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
	runtime: "experimental-edge",
};

const fontCabinet = fetch(
	new URL("../../fonts/CabinetGrotesk/CabinetGrotesk-Extrabold.otf", import.meta.url)
).then((res) => res.arrayBuffer());
const fontInter = fetch(
	new URL("../../fonts/Inter/Inter-Regular.otf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function (req: NextRequest) {
	const fontDataCabinet = await fontCabinet;
	const fontDataInter = await fontInter;
	const { searchParams } = req.nextUrl;
	const title = searchParams.get("title");
	const description = searchParams.get("description");
	return new ImageResponse(
		(
			<div
				style={{
					backgroundImage:
						"url('https://static.pprmint.art/images/background.png')",
					width: "100%",
					height: "100%",
					padding: "44px 75px",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<h1
					style={{
						fontFamily: "Cabinet Grotesk",
						fontSize: 97,
						lineHeight: 0.85,
						color: "#eee",
					}}
				>
					{title}
				</h1>
				<h2
					style={{
						fontFamily: "Inter",
						fontSize: 45,
						lineHeight: 1,
						letterSpacing: 0.85,
						color: "#bbb",
						marginBottom: "auto",
					}}
				>
					{description}
				</h2>
			</div>
		),
		{
			width: 1200,
			height: 600,
			fonts: [
				{
					name: "Cabinet Grotesk",
					data: fontDataCabinet,
					weight: 800,
				},
				{
					name: "Inter",
					data: fontDataInter,
					weight: 400,
				},
			],
		}
	);
}
