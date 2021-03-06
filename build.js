import esbuild from 'esbuild'
import mdx from '@mdx-js/esbuild'

await esbuild.build({
  bundle: true,
  entryPoints: ['index.mdx'],
  outfile: 'output.js',
  format: 'esm',
  minify: true,
  platform: 'browser',
  plugins: [mdx({})],
  treeShaking: true
})
