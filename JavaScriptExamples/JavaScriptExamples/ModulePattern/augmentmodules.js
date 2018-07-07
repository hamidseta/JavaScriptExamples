var Module = (function (my) {
    my.anotherMethod = function () {
        console.log('Added another method using augmentation')
    };

    return my;
}(Module || {} ));