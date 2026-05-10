import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base to '/your-repo-name/' if deploying to a project page
// e.g. base: '/portfolio/' for github.com/varshney565/portfolio
// Use base: '/' if deploying to varshney565.github.io
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
