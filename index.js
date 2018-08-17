(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.xxx = factory());
}(this, (function () { 'use strict';

    function develop(v){
        return v.replace(/(^\.|[^(\d|\.)])/g, '').replace(/(\d+\.)(.*)/, function (s, $1, $2) {
            return $1 + $2.replace('.', '')
        }).replace(/^0([^\.])/g, '$1');
    }

    return develop;

})));
