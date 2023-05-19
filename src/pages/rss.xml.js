// // https://docs.astro.build/en/guides/rss/
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/siteMetaData';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function get(context) {
  const allArticles = await getCollection('articles', (article) => {
    return !article.data.isDraft && !article.data.isArchived && article.data.date <= new Date();
  });
  allArticles.reverse();

  return rss({
    title: "MarcGrabanski.com: Web Development & Business RSS Feed",
    description: site.title,
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    items: allArticles.map((article) => ({
      title: article.data.postTitle,
      pubDate: article.data.date,
      description: article.data.description,
      link: `/articles/${article.slug}`,
      content: sanitizeHtml(parser.render(article.body)),
    })),
  });
}
