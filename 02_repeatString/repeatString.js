function repeatString(string, times) {
let repeatedString = "";
if (times < 0) return 'ERROR';
while (times > 0) {
    repeatedString +=string;
    times--;
}
    return repeatedString;
};
repeatString('hey', 3)
// Do not edit below this line
module.exports = repeatString;
