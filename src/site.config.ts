import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// ! Please remember to replace the following site property with your own domain, used in astro.config.ts
	url: "https://kanqiu.dev",
	/*
		- Used to construct the meta title property found in src/components/BaseHead.astro L:11
		- The webmanifest name found in astro.config.ts L:42
		- The link value found in src/components/layout/Header.astro L:35
		- In the footer found in src/components/layout/Footer.astro L:12
	*/
	title: "kanqiu.dev",
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Kan Qiu",
	// Used as the default description meta property and webmanifest description
	description:
		"Kan Qiu's personal blog — documenting hands-on practice in LLM applications and agent development, along with reflections on engineering and life.",
	// HTML lang property, found in src/layouts/Base.astro L:18 & astro.config.ts L:48
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en-GB",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

// Used to generate the Header nav. External URLs open in a new tab.
// Order here is the display order; Home is hidden while on the home page.
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "https://github.com/kqiu10",
		title: "GitHub",
	},
	{
		// TODO: replace with your real LinkedIn profile URL
		path: "https://www.linkedin.com/in/REPLACE-ME/",
		title: "LinkedIn",
	},
	{
		path: "/posts/",
		title: "Blog",
	},
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	// https://expressive-code.com/guides/themes/#available-themes
	themes: ["github-light"],
	useThemedScrollbars: false,
};
