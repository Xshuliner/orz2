# orz2 组件库项目

## 在线展示

https://www.orz2.top/orz2-ui/

## npm 组织

https://www.npmjs.com/org/orz2

## 应用技术

pnpm + turbo + wujie + vue2 + vue3 + react + rollup

## 启动命令

`pnpm install` 安装项目依赖  
`pnpm run start` 将项目中包含 start 命令的项目（页面项目）全部运行起来  
`pnpm run build` 将项目中包含 build 命令的项目（页面项目）全部编译并打包输出到 dist 目录  
`pnpm run lib` 将项目中包含 lib 命令的项目（npm 项目）全部编译并打包输出到 lib 目录

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

## jest 匹配规则

- toBe 使用 Object.is 判断是否严格相等。
- toEqual 递归检查对象或数组的每个字段。
- toBeNull 只匹配 null。
- toBeUndefined 只匹配 undefined。
- toBeDefined 只匹配非 undefined。
- toBeTruthy 只匹配真。
- toBeFalsy 只匹配假。
- toBeGreaterThan 实际值大于期望。
- toBeGreaterThanOrEqual 实际值大于或等于期望值。
- toBeLessThan 实际值小于期望值。
- toBeLessThanOrEqual 实际值小于或等于期望值。
- toBeCloseTo 比较浮点数的值，避免误差。
- toMatch 正则匹配。
- toContain 判断数组中是否包含指定项。
- toHaveProperty(keyPath, value) 判断对象中是否包含指定属性。
- toThrow 判断是否抛出指定的异常。
- toBeInstanceOf 判断对象是否是某个类的实例，底层使用 instanceof。

## 参考文档

### 无界

官方文档
https://wujie-micro.github.io/doc/

### turbo

#### 官方文档

https://turbo.build/
https://turbo.build/repo/docs
https://github.com/vercel/turbo

#### turbo.json 文档

https://turbo.build/repo/docs/reference/codemods#create-turbo-config

### Vue

#### Vue2 官方文档

https://v2.cn.vuejs.org/

#### Vue3 官方文档

https://cn.vuejs.org/
