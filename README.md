# orz2 组件库项目

## 项目结构

### packages

存放打包暴露出去的 npm 库

#### config

通用配置

#### utils

公共方法

#### vue2-h5

vue2 移动端组件库

#### vue3-h5

vue3 移动端组件库

### main

微前端基座项目

### subs

微前端各自技术栈的子壳子项目

## pnpm 使用说明

```bash
# 安装pnpm
$ npm install pnpm -g

# 安装配置文件中的依赖
$ pnpm i

# 安装新依赖
$ pnpm add <package_name> --filter <workspace_name>
$ pnpm i <package_name> --filter <workspace_name>


# 删除全局和每个workspace的node_modules (win无效)
$ pnpm -r exec rm -rf node_modules
$ pnpm rimraf  **/node_modules

# 运行脚本
$ pnpm -r --filter=<workspace_name> run <script>
```

优势：

1. 磁盘空间利用非常高效
2. 支持 monorepo

## 无界介绍

官方文档
https://wujie-micro.github.io/doc/
