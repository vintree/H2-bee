//import IsDom from './util/isDom';
import Tap from './util/tap';

var switchs = function() {};

switchs.init = function() {
    Tap('', '[role=switch]', function(e) {
        this.classList.toggle('bee-active');
    });
};

module.exports = switchs;