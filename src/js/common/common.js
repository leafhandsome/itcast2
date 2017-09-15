var isLogin = !!$.cookie('PHPSESSID');

//是否登录页
var isLoginPage = location.pathname == '/itcast/dist/html/user/login.html';
if (isLogin && isLoginPage) {
    location.href = "/itcast/dist/"
}

if (!isLogin && !isLoginPage) {
    location.href = "/itcast/dist/html/user/login.html"
}

NProgress.start();
window.onload = function() {
    NProgress.done();
}