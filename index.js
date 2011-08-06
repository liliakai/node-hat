var hat = module.exports = function (bits, base) {
    if (!base) base = 16;
    if (bits <= 0) return '0';
    var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
    var rem = digits - Math.floor(digits);
    
    var res = '';
    
    for (var i = 0; i < Math.floor(digits); i++) {
        var x = Math.floor(Math.random() * base).toString(base);
        res = x + res;
    }
    
    if (rem) {
        var b = Math.pow(base, rem);
        var x = Math.floor(Math.random() * b).toString(base);
        res = x + res;
    }
    
    if (parseInt(res, base) >= Math.pow(2, bits)) {
        return hat(bits, base)
    }
    else return res;
};
