/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
  trailingSlash: true, // URL 끝에 슬래시를 추가하려면 true로 설정
  eslint: {
    ignoreDuringBuilds: true, // 👈 빌드 중 ESLint 검사 건너뛰기
  },
};

export default nextConfig;
