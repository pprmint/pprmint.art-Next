import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
	runtime: "experimental-edge",
};

const fontRegular = fetch(
	new URL("../../fonts/Aspekta/Aspekta-400.otf", import.meta.url)
).then((res) => res.arrayBuffer());
const fontBold = fetch(
	new URL("../../fonts/Aspekta/Aspekta-700.otf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function (req: NextRequest) {
	const fontDataRegular = await fontRegular;
	const fontDataBold = await fontBold;
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
						fontFamily: "Aspekta Bold",
						fontSize: 97,
						lineHeight: 0.85,
						color: "#eee",
					}}
				>
					{title}
				</h1>
				<h2
					style={{
						fontFamily: "Aspekta",
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
					name: "Aspekta",
					data: fontDataRegular,
					weight: 400,
				},
				{
					name: "Aspekta Bold",
					data: fontDataBold,
					weight: 700,
				},
			],
		}
	);
}
