import { defineConfig } from 'rollup';
import { cleandir } from 'rollup-plugin-cleandir';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import image from '@rollup/plugin-image';
import svg from 'rollup-plugin-svg';
import { terser } from 'rollup-plugin-terser';

const prod = process.env.NODE_ENV !== 'development';

const config = {
	input: './src/index.js',
	output: [
		{
			file: './lib/index.cjs',
			format: 'cjs'
		},
		{
			file: './lib/index.mjs',
			format: 'esm'
		},
		{
			file: './lib/index.umd.js',
			format: 'umd',
			name: 'orz'
		}
	],
	plugins: [
		cleandir('lib'), //
		commonjs(),
		image(),
		svg(),
		json()
	]
};

if (prod) {
	config.plugins.push(terser());
}

export default defineConfig(config);
