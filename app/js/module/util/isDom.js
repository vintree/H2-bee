var isDom = function() {};

isDom.init = function(target, element) {
    if(element.length) {
        for(var i = 0, l = element.length; i < l; i++) {
            if(target === element[i]) {
                return true;
            }
        }
    } else {
        if(target === element) {
            return true;
        }
    }
    return false;
};

module.exports = isDom;