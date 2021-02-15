import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

import { Layout, Sidebar, Newsletter } from "../../components";
import { readTime } from "../../helpers";

const Post = ({ frontmatter, content }) => {
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3">
                    <h1 className="text-5xl font-bold mb-16 dark:text-white">
                        {frontmatter.title}
                    </h1>
                    <div
                        className="prose dark:prose-dark prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none"
                        dangerouslySetInnerHTML={{ __html: marked(content) }}
                    />
                </div>
                <Sidebar />
            </div>
            <Newsletter />
        </Layout>
    );
};

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMetadata = fs.readFileSync(
        path.join("posts", slug + ".md"),
        "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMetadata);

    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("posts"));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export default Post;
