/*
 查询是否是移动端
 userAgent.isMobile() //boo
 */
const userAgent = function() {}

userAgent.isMobile = function() {
    var mobileArr = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    return mobileArr.some(function(v) {
        return window.navigator.userAgent.indexOf(v) > 0 ? true : false;
    });
}

userAgent.identify = function() {
    const userAgent = window.navigator.userAgent;
    if(userAgent.includes('Android')) {
        return 'android';
    } else if(userAgent.includes('iPhone')) {
        return 'ios';
    } else {
        return 'windows';
    }
}

module.exports = userAgent;
