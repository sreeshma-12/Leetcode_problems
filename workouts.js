/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let s = x.toString();
    let str = s.split("").reverse().join("");
    let int = parseInt(str, 10);
    if (x === int) {
        return true;
    } else {
        return false;
    }
};
