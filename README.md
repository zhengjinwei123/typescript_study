# typescript_study
学习typescript

### 参考资料
1. [慕课网视频教程](http://www.imooc.com/learn/763)<br>
2. [官网](https://www.tslang.cn/)<br>
3. [入门](http://www.runoob.com/w3cnote/getting-started-with-typescript.html)<br>
4. [中文手册](http://www.runoob.com/manual/gitbook/TypeScript/_book/)<br>


### 学习总结

> TypeScript 遵循 ECMAScipt6,学习起来还是比较轻松,在模块方面要注意

##### 1. 引用nodejs模块

1. 首先需要创建一个 后缀名为 `d.ts`的 typescript文件，例如 `node.d.ts`,<br>
typescript在模块机制上回检查这个文件，从而导入指定模块.

2. `node.d.ts`文件内容(假设我要导入fs,path,lodash,url) <br>

``` typescript
declare module "url"{
    export interface Url{
        protocol?:string;
        hostname?:string;
        pathname?:string;
    }

    export function parse(urlStr:string,parseQueryString?,slashesDenoteHost?):Url;
}
declare module "path"{
    export function join(...paths:any[]):string;
}

declare module "fs";

declare module "lodash";
```
<br>
3. 引用模块 (假设你有一个index.ts文件)

``` typescript
import * as fs from 'fs';
let contentText = fs.readFileSync('./test1.js','utf-8');
console.log(contentText);

import * as path from "path";
console.log(path.join(__dirname,"/"));

import * as _ from "lodash";
_.each([1,2,3,4],function(v,k){
    console.log(v,k);
});
```
##### 2. 引用自己定制的模块

1. 假设有个文件名叫 `math.ts`的文件,这个文件中是你需要定制的模块 <br>

``` typescript
export function add(x:number,y:number){
    return x+y;
}

export function sub(x:number,y:number){
    return x-y;
}

export function multi(x:number,y:number){
    return x*y;
}
```
<br>
2. 引用这个定制模块 <br>

``` typescript
import * as myMath from './math';

console.log(myMath.add(1,2));
console.log(myMath.sub(1,2));

//或者也可以这样引入 一部分

import {add,multi} from './math'

console.log(add(1,1));
console.log(multi(1,2));
```

##### 3. 如果不愿意写 `xx.d.ts`文件,又想引入第三方模块,可以这样做,在webstorm下<br>

`Preferences -> Languages & Frameworks -> Libraries -> Downloads… -> TypeScript community stubs，选你所需 Download & Install`<br>

这样webstorm 会帮你下载好第三方库，并且这些库已经自带`xx.d.ts`模块声明文件,然后你就可以直接像上面那样使用这些模块.

### 关于命名空间和模块

> 命名空间是为了避免命名冲突,模块本身就已经解决了这个问题,所以注意以下问题

1. 不要对模块使用命名空间 <br>
2. 命名空间的使用存在于一个文件中，否则使用模块即可 <br>
3. 引用模块要使用 `import * as xx from 'xx'`的模式，不要使用 `/// <reference path='xxx.ts'>`的模式 <br>


### 开发环境配置
在webstorm下(本人使用webstorm 2017.1.4) <br>

1. 激活 typescript 支持 <br>
```
npm install -g typescript
```
<br>
2. 设置 <br>
<img src="https://github.com/zhengjinwei123/typescript_study/blob/master/docs/images/webstorm_add_lib.png?raw=true" width="300px" height="300px" alt="" /> <br>
<img src="https://github.com/zhengjinwei123/typescript_study/blob/master/docs/images/webstorm_active_ts.png?raw=true" width="300px" height="300px" alt="" /> <br>
<img src="https://github.com/zhengjinwei123/typescript_study/blob/master/docs/images/ws_active_ts_2.png?raw=true" width="300px" height="300px" alt="" /> <br>