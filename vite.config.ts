import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import loadVersion from 'vite-plugin-package-version';

export default defineConfig({
  plugins: [react(), UnoCSS(), loadVersion()],
});
