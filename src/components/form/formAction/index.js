const formMethods = {
    /*通用显示方法*/
    show: function(fn, control) {
        fn.call(this, control);
    },
    /*通用隐藏方法*/
    hide: function(fn, control) {
        fn.call(this, control);
    },
    /*通用设置数据方法*/
    changeVal: function(fn, control) {
        fn.call(this, control)
    }
}