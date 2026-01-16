// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // (this was already a comment) https://vite.dev/config/
// // export default defineConfig({
//   // plugins: [react()],
//   // base: '/ASGMT-10/'
// export default defineConfig(({ command, mode }) => {
//   return {
//     plugins: [react()],
//     // If we are building for GitHub Pages, use the repo name. 
//     // Otherwise (like on Netlify), use the root.
//     base: process.env.NODE_ENV === 'production' ? '/ASGMT-10/' : '/',
//   }

// })
// New code
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Netlify automatically sets process.env.NETLIFY to true.
  // If we are on Netlify, use '/'. If we are anywhere else (GitHub), use '/ASGMT-10/'.
  base: process.env.NETLIFY ? '/' : '/ASGMT-10/',
})
