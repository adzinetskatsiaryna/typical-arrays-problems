
exports.min = function min (array) {
    if(!Array.isArray(array) || array.length === undefined || array[0] === undefined) {
        return 0;
    }
    return array.reduce(function (a, b) {
        return ( a < b ? a : b );
      });
}

exports.max = function max (array) {
    if(!Array.isArray(array) || array.length === undefined || array[0] === undefined) {
        return 0;
    }
    return array.reduce(function (a, b) {
        return ( a > b ? a : b );
      });
}

exports.avg = function avg (array) {
    if(!Array.isArray(array) || array.length === undefined || array[0] === undefined) {
        return 0;
    }
   let sum = array.reduce((acc, item)=> acc+item, 0);
   return sum/array.length
}
