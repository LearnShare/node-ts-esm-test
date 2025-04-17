const {
  build,
}  = require('esbuild');

const {
  dependencies,
  devDependencies,
} = require('./package.json');

build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  outfile: './dist/index.js',
  external: [
    ...Object.keys(dependencies || {}),
    ...Object.keys(devDependencies || {}),
  ],
}).catch(() => process.exit(1));
