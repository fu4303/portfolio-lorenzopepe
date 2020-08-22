import { Fragment } from "react";
import Head from "next/head";
import { timestampToDate } from "../../utils/timestampToDate";
import { PostMetadata } from "../../pages";

interface PostHeaderProps {
	metadata: PostMetadata;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ metadata }) => {
	const { title, description, tags, timestamp } = metadata;
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="author" content="Lorenzo Pepe" />
				<meta name="keywords" content={tags.join(" , ")} />
			</Head>
			<div className="post-header">
				<h2>{title}</h2>
				<span className="date">{timestampToDate(timestamp)}</span>
			</div>
		</Fragment>
	);
};
