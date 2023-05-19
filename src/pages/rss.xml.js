// // https://docs.astro.build/en/guides/rss/
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/siteMetaData';

export async function get(context) {
  const allArticles = await getCollection('articles', (article) => {
    return !article.data.isDraft && !article.data.isArchived && article.data.date <= new Date();
  });
  allArticles.reverse();

  return rss({
    title: site.url,
    description: site.title,
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    items: allArticles.map((article) => ({
      title: article.data.postTitle,
      pubDate: article.data.date,
      description: article.data.description,
      link: `/articles/${article.slug}`,
      content: article.body,
    })),
  });
}
