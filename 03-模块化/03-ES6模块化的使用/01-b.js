/* 选择变量导入 */
/* import { 要导入的变量/函数/类的名字 } from "参考的文件名" */
// 注意：只能用对象导入
// 注意：导入的名次必须和导出的名称相同
// 注意：单独导出和对象导出，导入时不能同时使用对象导入
import { a1, f1, C1 } from "./01-a.js"
console.log(a1);
f1();
let c1 = new C1();
c1.f();

/* 全部导入 */
/* import * as 别名 from "参考的文件名" */
import * as z from "./01-a.js"
console.log(z.a2);
z.f2();
let c2 = new z.C2();
c2.f();

/* 导入默认值 */
/* import 别名 from "参考的文件名" */
import y from "./01-a.js"
console.log(y.a3);
y.f3();
let c3 = new y.C3();
c3.f();

