import UserAgent from './userAgent';
import IsDom from './isDom';

const tap = function(parentElemnt, element, callback) {
    var startTx, startTy;
    parentElemnt = parentElemnt ? document.querySelectorAll(parentElemnt) : [document];
    element = document.querySelectorAll(element);
    for(var i = 0, l = parentElemnt.length; i < l; i++) {
        if(UserAgent.isMobile()) {
            parentElemnt[i].addEventListener('touchstart', function(e) {
                if(IsDom.init(e.target, element)) {
                    var touches = e.touches[0];
                    startTx = touches.clientX;
                    startTy = touches.clientY;
                }
            }, false);
            parentElemnt[i].addEventListener('touchend', function(e) {
                if(IsDom.init(e.target, element)) {
                    var touches = e.changedTouches[0],
                        endTx = touches.clientX,
                        endTy = touches.clientY;
                    // 在部分设备上 touch 事件比较灵敏，导致按下和松开手指时的事件坐标会出现一点点变化
                    if( Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6 ){
                        callback.call(e.target, e);
                    }
                }
            }, false);
        } else {
            parentElemnt[i].addEventListener('click', function(e) {
                if(IsDom.init(e.target, element)) {
                    callback.call(e.target, e);
                }
            });
        }
    }
};

module.exports = tap;