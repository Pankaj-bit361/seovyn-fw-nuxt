import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent(event, "blog").find();
  const urls = ["/", "/about/", "/blog/", ...posts.map((p) => `${p._path}/`)];
  setHeader(event, "content-type", "application/xml");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `<url><loc>https://pankaj-bit361.github.io/seovyn-fw-nuxt${encodeURI(u)}</loc></url>`)
    .join("\n")}\n</urlset>\n`;
});
