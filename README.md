## RN基础学习
* 基于react-native 0.53.0

### Git中.gitignore文件不起作用的解决

```js
    git rm -r --cached .
    git add .
    git commit -m 'update .gitignore'
```

### 删除git仓库

* 上面步骤不起作用的话，可以删除git仓库，重新初始化
```js
    rm -rf .git
    git init
```