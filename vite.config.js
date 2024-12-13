import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://github.com/Shyamala9926/todoList-App.git', // Replace <repository-name> with your GitHub repo name
  plugins: [react()],
});