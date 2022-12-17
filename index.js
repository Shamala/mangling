module.exports = function mangling(string) {
    if(typeof string !== 'string') throw new TypeError('Not a string');
    return string.replace(/\s/g,"");
};
