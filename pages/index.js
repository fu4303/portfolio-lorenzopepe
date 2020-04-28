import { Fragment } from "react";
import Head from "next/head";
import { PortfolioProject } from "../Components/PortfolioProject";

const Portfolio = () => {
	return (
		<Fragment>
			<Head>
				<meta name="description" content="Lorenzo Pepe Portfolio" />
				<title>Portfolio</title>
			</Head>
			<PortfolioProject
				imgAlt="A screen of my portfolio about section"
				smSrc="lorenzopepe-sm_1x.webp 1x, lorenzopepe-sm_2x.webp 2x"
				mdSrc="lorenzopepe-md_1x.webp 1x, lorenzopepe-md_2x.webp 2x"
				fallback="lorenzopepe-sm_1x.png, lorenzopepe-sm_2x.png,"
				repo="https://github.com/lorenzored98/lorenzopepe"
				href="https://lorenzopepe.dev"
				tags={["react", "next.js", "sass"]}
				title="lorenzopepe.dev"
			>
				Next.js static website to showcase my projects and my blog
				posts.
			</PortfolioProject>

			<PortfolioProject
				imgAlt="Discord Logo"
				smSrc="DISC_LOGO-sm_1x.webp 1x, DISC_LOGO-sm_2x.webp 2x"
				mdSrc="DISC_LOGO-md_1x.webp 1x, DISC_LOGO-md_2x.webp 2x"
				fallback="DISC_LOGO-sm_1x.png, DISC_LOGO-sm_2x.png,"
				repo="https://github.com/lorenzored98/DiscordBot"
				href=""
				tags={["node.js", "api"]}
				title="Discord Bot"
			>
				Using the Discord API to build a bot.
			</PortfolioProject>
		</Fragment>
	);
};

export default Portfolio;
