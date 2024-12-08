import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react()],
    server: {
      cors: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  });
};
