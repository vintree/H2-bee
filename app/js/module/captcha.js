import Tap from './util/tap';

var captcha = function() {};

captcha.init = function() {
    Tap('', '[role=captcha]', function(e) {
        const note = this.getAttribute('data-bee-captcha'),
            re = /\{{([^}}]+)?}}/i,
            baseCaptcha = this.innerHTML;
        let time = Number(re.exec(note)[1]);

        if(!this.getAttribute('data-bee-state')) {
            this.setAttribute('data-bee-state', 'ing');
            this.innerHTML = note.replace(re, time--);

            const tid = setInterval(function() {
                if(time !== 0) {
                    this.innerHTML = note.replace(re, time--);
                } else {
                    clearInterval(tid);
                    this.innerHTML = baseCaptcha;
                    this.removeAttribute('data-bee-state');
                }
            }.bind(this), 1000);
        }
    });
};

module.exports = captcha;