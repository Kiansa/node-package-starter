import { defineConfig } from 'rolldown'

// If you have peer dependencies (e.g., 'react', 'vue', etc.), list them here so they are not bundled
const externalDeps = [
  // e.g. "react"
]

export default defineConfig({
  input: 'src/main.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      entryFileNames: 'index.cjs.js',
    },
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      entryFileNames: 'index.esm.js',
    },
  ],
  external: externalDeps,
})
