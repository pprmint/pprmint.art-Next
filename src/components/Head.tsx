import Head from "next/head";
import { useRouter } from "next/router";
import { useLocale } from "next-intl";

export default function CommonHead(props: {
	title: string;
	description: string;
	ogImg: string; // Images must be placed in /public/og/[locale] and must share the same name as the prop.
	favicon?: string; // Prop must match respective folder name inside /public/favicons.
	color?: string; // Can't use short HEX codes (#123), must be #123456
}) {
	// Output title element as single text node.
	const title = `${props.title} // pprmint.art`;
	// Get URL for OpenGraph metadata.
	const router = useRouter();
	// Default props if not passed in the element.
	const { favicon = "pprmint" } = props;
	const { color = "#00cc66" } = props;
    const locale = useLocale();
	const domain = "https://next.pprmint.art";
	return (
		<Head>
			{/* Basic metadata */}
			<title>{title}</title>
			<meta name="description" content={props.description} />
			<meta name="theme-color" content={color} />

			{/* Favicons and other things for different platforms */}
			<link rel="apple-touch-icon" sizes="180x180" href={"/favicons/"+favicon+"/apple-touch-icon.png"} />
			<link rel="icon" type="image/png" sizes="32x32" href={"/favicons/"+favicon+"/favicon-32x32.png"} />
			<link rel="icon" type="image/png" sizes="16x16" href={"/favicons/"+favicon+"/favicon-16x16.png"} />
			<link rel="manifest" href={"/favicons/"+favicon+"/site.webmanifest"} />
			<link rel="mask-icon" href={"/favicons/"+favicon+"/safari-pinnedtab.svg"} color={color} />
			<link rel="shortcut icon" href={"/favicons/"+favicon+"/favicon.ico"} />

			{/* OpenGraph metadata */}
			<meta property="og:site_name" content="pprmint.art" />
			<meta property="og:title" content={props.title} />
			<meta property="og:url" content={domain+router.pathname} />
			<meta property="og:description" content={props.description} />
			<meta property="og:image" content={domain+"/og/"+locale+"/"+props.ogImg} />
			
			{/* Twitter metadata */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@npprmint" />
			<meta name="twitter:creator" content="@npprmint" />
			<meta name="twitter:title" content={props.title} />
			<meta name="twitter:description" content={props.description} />
			<meta name="twitter:image" content={domain+"/og/"+locale+"/"+props.ogImg} />
		</Head>
	);
}
