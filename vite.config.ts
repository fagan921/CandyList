import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // ✅ Load environment variables using Vite's method
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
      // ✅ Use `import.meta.env` instead of `process.env`
      'import.meta.env': env,
    },
  };
});