// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://landing-page-vert-sigma.vercel.app', // ← 실제 배포 주소
  generateRobotsTxt: true, // robots.txt도 생성
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 5000,
};