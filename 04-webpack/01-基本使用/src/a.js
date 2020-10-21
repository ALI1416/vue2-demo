/* 使用CommonJS */
function fa() {
    console.log('CommonJS function a()');
}
function fb() {
    console.log('CommonJS function b()');
}
// 导出
module.exports = {
    fa, fb,
}