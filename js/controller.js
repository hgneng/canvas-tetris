document.body.onkeydown = function( e ) { // 注册body元素（相当于整个页面）的按键事件
    var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate' // 这是是上方向键，这里做一个翻译，让键值对于keyPress更可读
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};
