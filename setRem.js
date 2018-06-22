/**
 * author: maiime
 */
;(function() {
    function resetRem() {
        var _width = window.innerWidth;
        var html = document.getElementsByTagName('html')[0];
        if (_width > 750) {
            html.style.width = '750px';
            html.style.margin = '0 auto';
            html.style.fontSize = '100px';
        } else {
            html.style.fontSize = _width / 7.5 + 'px';
        }
    }
    resetRem();
    window.onresize = function () {
        resetRem();
    };
})();