/** @type {import('next').NextConfig} */
const { join } = require('path');
const path = require('path');
const withTM = require('next-transpile-modules')([]);
// ['@shared/api', '@shared/ui'];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /*
    현재 standalone 적용 시, outputFileTracingRoot과 PnP와 연동이 제대로 되지 않는문제 존재
    해당 issue 해결되기 전까지 .yarnrc.yml nodeLinker: node-modules로 설정한다.
    아래 설정을 통해, build 파일의 차이가 큼
   */
  output: 'standalone',
  experimental: {
    scrollRestoration: true,
    externalDir: true,
    esmExternals: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },

  webpack: (config, { webpack, isServer }) => {
    /* 
      tsconfig.json 
      @shared/api, @shared/ui를 해당 프로젝트의 하위에서 땡겨쓰기 위해 아래와 같이 적용함.
      현재, shared ui 하위에서 relative path대신 
      tsconfig를 이용해 alias 를 사용하고 있어 해당 값 들에 대해 똑같이 맞춰놓은 상태이다.
      ref - @shared/ui의 tsconfig 참고
    */
    config.resolve.alias = {
      ...config.resolve.alias,
      '@shared/ui': join(__dirname, '../../shared/ui/src/'),
      '@shared/api': join(__dirname, '../../shared/api/'),
    };

    return config;
  },
  async headers() {
    return [
      {
        source: '/:path((?!api).*)*',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'same-origin' },
        ],
      },
    ];
  },
};

module.exports = withTM(nextConfig);
