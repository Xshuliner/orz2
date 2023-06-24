import { rollupOptionsAutoprefixer, rollupOptionsPx2vw } from '@orz2/config';
import { babel } from '@rollup/plugin-babel';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'rollup';
import { cleandir } from 'rollup-plugin-cleandir';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import image from '@rollup/plugin-image';
import svg from 'rollup-plugin-svg';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import px2vw from 'postcss-px-to-viewport';

const prod = process.env.NODE_ENV !== 'development';

const config = {
	input: './src/index.js',
	output: [
		{
			file: './lib/index.umd.js',
			format: 'umd',
			name: 'orz'
		},
		{
			file: './lib/index.esm.js',
			format: 'esm'
		},
		{
			file: './lib/index.cjs.js',
			format: 'cjs'
		}
	],
	plugins: [
		cleandir('lib'),
		commonjs(),
		babel({
			exclude: 'node_modules/**',
			presets: ['@vue/babel-preset-jsx'],
			// bundled-需要显示指明babelHelpers 配置， 没配置，控制台有一些warning
			babelHelpers: 'bundled'
			// 5.2.1 是可以不用配置 extensions
			// 5.2.2 以后 需要将 vue配置进去
			// extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
		}),
		// TODO: vue对行内样式不会处理，需要用rollup-plugin-postcs还是什么其他插件再详细如何处理
		vue({
			// css: true,
			preprocessStyles: true,
			cssModulesOptions: {
				postcss: [
					autoprefixer(rollupOptionsAutoprefixer), //
					px2vw(rollupOptionsPx2vw)
				]
			}
		}),
		postcss({
			plugins: [
				autoprefixer(rollupOptionsAutoprefixer), //
				px2vw(rollupOptionsPx2vw)
			],
			extract: 'css/index.css'
		}),
		image(),
		svg(),
		json()
	],
	external: ['vue']
};

if (prod) {
	config.plugins.push(terser());
}

export default defineConfig(config);
