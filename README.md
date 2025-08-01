# orz2 组件库项目

一个基于 pnpm + turbo 的现代化 monorepo 项目，集成了微前端架构、Vue2/Vue3 组件库、工具函数库和配置管理。

## 🌟 项目特性

- **Monorepo 架构**: 使用 pnpm workspace + turbo 实现高效的多包管理
- **微前端支持**: 基于 wujie 微前端框架，支持多技术栈子应用
- **多框架组件库**: 同时支持 Vue2 和 Vue3 的 H5 移动端组件
- **工具函数库**: 提供常用的 JavaScript 工具函数
- **配置管理**: 统一的开发配置和数据源管理
- **Node.js 工具包**: 服务端开发工具函数
- **完整的开发工具链**: 支持 TypeScript、ESLint、Prettier、Jest 测试等

## 📦 在线展示

- **组件库展示**: https://www.orz2.top/orz2-ui/
- **NPM 组织**: https://www.npmjs.com/org/orz2

## 🚀 快速开始

### 环境要求

- Node.js >= 16
- pnpm >= 7

### 安装依赖

```bash
# 安装全局依赖
npm install pnpm -g
npm install rollup -g
npm install jest -g
npm install jsdoc -g
npm install turbo -g
npm install live-server -g

# 安装项目依赖
pnpm install
```

### 开发命令

```bash
# 启动所有页面项目（微前端基座 + 子应用）
pnpm run start

# 构建所有页面项目
pnpm run build

# 构建所有 packages 项目（组件库、工具库等）
pnpm run lib

# 运行所有测试
pnpm run test

# 启动文档服务
pnpm run live
```

## 📁 项目结构

```
orz2/
├── README.md                 # 项目说明文档
├── package.json             # 根目录配置
├── turbo.json              # Turbo 构建配置
├── pnpm-workspace.yaml     # pnpm workspace 配置
├── pnpm-lock.yaml          # 依赖锁定文件
│
├── orz2-ui/                # 微前端基座项目 (Vue2)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── packages/               # NPM 包集合
│   ├── config/            # 配置管理包 (@orz2/config)
│   │   ├── src/
│   │   │   ├── rollupOptionsAutoprefixer/  # Rollup autoprefixer 配置
│   │   │   └── rollupOptionsPx2vp/         # Rollup px2viewport 配置
│   │   └── package.json
│   │
│   ├── utils/             # JavaScript 工具函数库 (@orz2/utils)
│   │   ├── src/
│   │   │   ├── parseUrl/      # URL 解析工具
│   │   │   ├── sayHello/      # 问候函数
│   │   │   └── splitCustom/   # 自定义分割函数
│   │   ├── test/              # 单元测试
│   │   └── package.json
│   │
│   ├── kits/              # Node.js 工具包 (@orz2/kits)
│   │   ├── src/
│   │   │   ├── getGitInfo/    # Git 信息获取
│   │   │   └── sayHello/      # 服务端问候函数
│   │   └── package.json
│   │
│   ├── vue2-h5/           # Vue2 H5 组件库 (@orz2/vue2-h5)
│   │   ├── src/
│   │   │   ├── OrzButton/     # 按钮组件
│   │   │   └── OrzECharts/    # ECharts 图表组件
│   │   └── package.json
│   │
│   └── vue3-h5/           # Vue3 H5 组件库 (@orz2/vue3-h5)
│       ├── src/
│       │   ├── OrzList/       # 列表组件
│       │   └── OrzMap/        # 地图组件
│       └── package.json
│
└── subs/                  # 微前端子应用
    ├── sub-vue2-h5/      # Vue2 子应用
    │   ├── src/
    │   │   ├── components/
    │   │   └── config/
    │   └── package.json
    │
    └── sub-vue3-h5/      # Vue3 子应用
        ├── src/
        │   └── config/
        └── package.json
```

## 📚 包说明

### @orz2/config (v0.0.2)
配置管理包，提供统一的开发配置和数据源管理。
- `rollupOptionsAutoprefixer`: Rollup autoprefixer 配置
- `rollupOptionsPx2vp`: Rollup px2viewport 配置

### @orz2/utils (v0.0.2)
JavaScript 工具函数库，提供常用的前端工具函数。
- `parseUrl`: URL 解析工具，支持复杂 URL 结构解析
- `sayHello`: 问候函数
- `splitCustom`: 自定义字符串分割函数

### @orz2/kits (v0.0.2)
Node.js 工具包，提供服务端开发工具函数。
- `getGitInfo`: Git 信息获取工具
- `sayHello`: 服务端问候函数

### @orz2/vue2-h5 (v0.0.2)
基于 Vue2 框架的 H5 移动端 UI 组件库。
- `OrzButton`: 按钮组件，支持点击计数和自定义消息
- `OrzECharts`: ECharts 图表组件

### @orz2/vue3-h5 (v0.0.2)
基于 Vue3 框架的 H5 移动端 UI 组件库。
- `OrzList`: 列表组件，支持点击计数
- `OrzMap`: 地图组件

## 🛠️ 开发指南

### 添加新依赖

```bash
# 为特定工作区添加依赖
pnpm add <package_name> --filter <workspace_name>
pnpm i <package_name> --filter <workspace_name>
```

### 运行特定项目

```bash
# 运行特定项目的脚本
pnpm -r --filter=<workspace_name> run <script>

# 示例：运行 Vue2 组件库开发模式
pnpm dev:@orz2/vue2-h5

# 示例：运行 Vue3 组件库开发模式
pnpm dev:@orz2/vue3-h5
```

### 清理依赖

```bash
# 删除所有 node_modules (Windows 无效)
pnpm -r exec rm -rf node_modules
pnpm rimraf **/node_modules
```

## 🧪 测试

项目使用 Jest 进行单元测试，支持以下匹配规则：

- `toBe`: 使用 Object.is 判断是否严格相等
- `toEqual`: 递归检查对象或数组的每个字段
- `toBeNull`: 只匹配 null
- `toBeUndefined`: 只匹配 undefined
- `toBeDefined`: 只匹配非 undefined
- `toBeTruthy`: 只匹配真
- `toBeFalsy`: 只匹配假
- `toBeGreaterThan`: 实际值大于期望
- `toBeGreaterThanOrEqual`: 实际值大于或等于期望值
- `toBeLessThan`: 实际值小于期望值
- `toBeLessThanOrEqual`: 实际值小于或等于期望值
- `toBeCloseTo`: 比较浮点数的值，避免误差
- `toMatch`: 正则匹配
- `toContain`: 判断数组中是否包含指定项
- `toHaveProperty(keyPath, value)`: 判断对象中是否包含指定属性
- `toThrow`: 判断是否抛出指定的异常
- `toBeInstanceOf`: 判断对象是否是某个类的实例

## 🔧 开发工具

### VSCode 推荐插件

- ESLint
- Prettier

### 技术栈

- **包管理**: pnpm
- **构建工具**: turbo + rollup
- **微前端**: wujie
- **前端框架**: Vue2 + Vue3
- **测试框架**: Jest
- **文档生成**: JSDoc
- **代码规范**: ESLint + Prettier

## 📖 参考文档

### 核心技术

- **[无界微前端](https://wujie-micro.github.io/doc/)**: 微前端框架官方文档
- **[Turborepo](https://turbo.build/)**: 构建系统官方文档
- **[Vue2](https://v2.cn.vuejs.org/)**: Vue2 官方文档
- **[Vue3](https://cn.vuejs.org/)**: Vue3 官方文档

### 开发工具

- **[JSDoc](https://jsdoc.bootcss.com/)**: 文档生成工具
- **[live-server](https://www.npmjs.com/package/live-server)**: 本地开发服务器

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 ISC 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- **GitHub 仓库**: https://github.com/Xshuliner/orz2
- **问题反馈**: https://github.com/Xshuliner/orz2/issues
- **在线演示**: https://www.orz2.top/orz2-ui/
- **NPM 组织**: https://www.npmjs.com/org/orz2
