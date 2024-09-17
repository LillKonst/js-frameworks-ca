import { defineConfig } from 'vite';
import { createReactPlugin } from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [createReactPlugin()],
});
