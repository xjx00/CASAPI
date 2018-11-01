# 元器件管理系统 Restful API
## 安装
1. 安装nodejs（推荐使用8.6.0版本）
2. 克隆仓库并安装

```
git clone https://git.witeaa.tk/ComponentArchiveSystem/casapi.git
npm install
npm start
```
## API介绍
* 查找元器件  GET /v1/search/{检索方式}/{检索值}

```
curl http://127.0.0.1:3000/v1/search/name/1k

返回：[{"id":1,"uid":"123455","name":"1k","footprint":"0603","type":"res","amount":1,"row":1,"col":1}]
```
* 添加元器件 POST /v1/insert

```
curl -H "Content-Type:application/json" -X POST \
-d '{"uid":"123455","name":"1k","footprint":"0603","type":"res","amount":1,"row":1,"col":1}' \
http://127.0.0.1:3000/v1/insert

返回：successful
```
* 删除器件 GET /v1/delete/{器件id}

```
curl http://127.0.0.1:3000/v1/delete/3

返回：successful
```
## 里程碑
- [x] 基础功能构建
- [ ] 模糊匹配支持
- [ ] 客户端对接
- [ ] APP端对接

## 开源协议
本项目遵循[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)  开源协议



