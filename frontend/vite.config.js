import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';
import { createHtmlPlugin } from 'vite-plugin-html';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const proxy_url =
    process.env.VITE_DEV_REMOTE === 'remote'
      ? process.env.VITE_BACKEND_SERVER
      : 'http://localhost:8888/';

  const config = {
    plugins: [
      react(),
      {
        ...history({
          verbose: true,
          rewrites: [
            { from: /^\/$/, to: '/index.html' },
            { from: /\/.*/, to: '/index.html' },
          ],
        }),
        enforce: 'pre',
      },
      createHtmlPlugin()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 5173
      ,
      proxy: {
        '/api': {
          target: proxy_url,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };

  return defineConfig(config);
};
