import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // 开启压缩
  compress: true,
  // 生产环境优化
  poweredByHeader: false,
  // 静态资源缓存
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // 防止点击劫持
          { key: 'X-Frame-Options', value: 'DENY' },
          // 防止MIME类型嗅探
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // 控制引用信息
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // XSS保护
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // 权限策略
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
        ],
      },
      // 静态资源长期缓存
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // 图片缓存
      {
        source: '/:path.(png|jpg|jpeg|gif|svg|webp|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
};

export default nextConfig;