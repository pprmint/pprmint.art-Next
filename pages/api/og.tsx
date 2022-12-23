import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
	runtime: "experimental-edge",
};

const fontRegular = fetch(
	new URL("../../fonts/Inter/Inter-Regular.otf", import.meta.url)
).then((res) => res.arrayBuffer());
const fontBold = fetch(
	new URL("../../fonts/Inter/Inter-DisplayBold.otf", import.meta.url)
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
					padding: "60px",
					display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
				}}
			>
				
					<h1
						style={{
							fontFamily: "Inter Display",
							fontSize: 84,
                            fontWeight: 700,
							lineHeight: 0.9,
							color: "#eee",
						}}
					>
						{title}
					</h1>
					<h2
						style={{
							fontFamily: "Inter",
							fontSize: 36,
							lineHeight: 1,
							letterSpacing: -0.004,
							color: "#bbb",
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
                    name: "Inter",
					data: fontDataRegular,
					weight: 400,
				},
                {
                    name: "Inter Display",
					data: fontDataBold,
					weight: 700,
				},
			],
		}
	);
}
