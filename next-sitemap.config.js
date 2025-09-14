// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://landing-page-vert-sigma.vercel.app', // ← 실제 배포 주소
  generateRobotsTxt: false, // robots.txt 수동 관리
  changefreq: 'monthly', // 페이지 변경 빈도
  priority: 1.0,
  sitemapSize: 5000,
  
  generateIndexSitemap: false, // 작은 사이트는 false로
  exclude: [], // API 경로 제외
};