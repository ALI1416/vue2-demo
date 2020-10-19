/* 直接在变量/函数/类前使用export关键词 */
export let a1 = 'a1';
export function f1() {
    console.log('f1');
}
export class C1 {
    f() {
        console.log('c1');
    }
}

/* 批量导出 */
let a2 = 'a2';
function f2() {
    console.log('f2');
}
class C2 {
    f() {
        console.log('c2');
    }
}
// 在尾部export要导出的对象
export { a2, f2, C2 }

/* 使用default别人可以自己命名 */
/* 注意：一个模块里面最多有1个默认值 */
let a3 = 'a3';
function f3() {
    console.log('f3');
}
class C3 {
    f() {
        console.log('c3');
    }
}
// export后加上default关键字
export default { a3, f3, C3 }
