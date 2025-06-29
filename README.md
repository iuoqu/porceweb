# 瓷韵新生 - 中国创意陶瓷艺术商城

一个展示和销售中国创意陶瓷艺术品的单页应用网站。

## 项目特点

- 现代化的单页应用设计
- 响应式布局，支持移动端和桌面端
- 优雅的动画和过渡效果
- 分类浏览和筛选功能
- 模拟购物车和结算流程
- 艺术家展示页面

## 技术栈

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (原生)
- Google Fonts (思源宋体和Inter)

## 目录结构

```
porcelweb/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── app.js
│   │   └── data.js
│   ├── images/
│   └── index.html
└── README.md
```

## 快速开始

1. 克隆仓库：
   ```bash
   git clone [repository-url]
   cd porcelweb
   ```

2. 在本地启动服务器：
   - 使用 Python：
     ```bash
     python -m http.server 8000
     ```
   - 或使用 Node.js：
     ```bash
     npx http-server
     ```

3. 在浏览器中访问：
   ```
   http://localhost:8000
   ```

## 功能模块

- **首页**：展示精选作品和艺术家
- **作品展示**：按类别、材质、设计风格分类浏览
- **艺术家**：展示艺术家简介和作品集
- **购物车**：模拟购物和结算流程

## 开发说明

- 所有数据存储在 `data.js` 中
- 主要业务逻辑在 `app.js` 中
- 自定义样式在 `styles.css` 中
- 使用 Tailwind CSS 进行样式设计

## 注意事项

- 目前使用占位图片，实际部署时需替换为真实图片
- 结算功能为模拟实现，实际使用需要集成支付系统
- 建议使用现代浏览器访问以获得最佳体验

## 贡献指南

1. Fork 项目
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交更改：`git commit -m 'Add some AmazingFeature'`
4. 推送到分支：`git push origin feature/AmazingFeature`
5. 提交 Pull Request

## 许可证

[MIT License](LICENSE) 