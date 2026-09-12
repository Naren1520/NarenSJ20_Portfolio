/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://narensj.netlify.app",
  generateRobotsTxt: true,
  outDir: "./public",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
