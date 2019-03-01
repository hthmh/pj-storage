# pj-storage

## h5缓存插件

> vue-cli3中 vue.config.js 配置babel转换  transpileDependencies: ['pj-storage']

```
import PStorage from 'pj-storage'
// 创建实例，前缀默认'pj'，storage默认sessionStorage
const pStorage = new PStorage('prefix',localStorage)

pStorage.setItem() // 存 默认做JSON.stringify处理
pStorage.getItem() // 取 默认做JSON.parse处理
pStorage.removeItem()
pStorage.getKeyList() // 获取当前prefix下所有key
pStorage.clear() // 清空当前prefix下缓存
pStorage.clearAll() // 调用原生storage的clear方法
```
