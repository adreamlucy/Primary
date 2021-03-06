Array.prototype.reduce  = function(callbackfn, initialValue) {
    // 异常处理，和 map 一样
    // 处理数组类型异常
    if (this === null || this === undefined) {
      throw new TypeError("Cannot read property 'reduce' of null or undefined");
    }
    // 处理回调类型异常
    if (Object.prototype.toString.call(callbackfn) != "[object Function]") {
      throw new TypeError(callbackfn + ' is not a function')
    }
    let O = Object(this);
    let len = O.length >>> 0;
    let k = 0;
    let accumulator = initialValue;
    if (accumulator === undefined) {
      for(; k < len ; k++) {
        // 查找原型链
        if (k in O) {
          accumulator = O[k];
          k++;
          break;
        }
      }
      // 循环结束还没退出，就表示数组全为空
      throw new Error('Each element of the array is empty');
    }
    for(;k < len; k++) {
      if (k in O) {
        // 注意，核心！
        accumulator = callbackfn.call(undefined, accumulator, O[k], O);
      }
    }
    return accumulator;
  }
  let arr = [1, 2, 3, 4, 5]
  console.log('测试===》', arr.reduce((total, cur) => {
    return total + cur
  }, 0))