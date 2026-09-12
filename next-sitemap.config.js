/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://narensj.netlify.app",
  generateRobotsTxt: true,
  outDir: "./public",
  changefreq: "monthly",
  priority: 0.9,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    additionalSitemaps: [],
  },
};
