import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/todoList', // Replace <repository-name> with your GitHub repo name
  plugins: [react()],
});

/*import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/todoList-App', // Replace with your repo name
});*/

