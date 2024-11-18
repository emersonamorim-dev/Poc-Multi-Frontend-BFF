import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Configuração da variável de ambiente para a porta
  env: {
    NEXT_PUBLIC_PORT: String(process.env.NEXT_PUBLIC_PORT || 3018),  
  },

  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // Configuração do Sass
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
};

export default nextConfig;
