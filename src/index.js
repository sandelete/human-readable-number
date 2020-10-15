module.exports = function toReadable (number) {
    let result = '';
    const num = '' + number;

    if (number === 0) {
        result += 'zero';
    }
    if (number > 0 && number < 10) {
        result += toUnit(num);
    }
    if (number >= 10 && number < 20) {
        result += toTens(num);
    }
    if (number >= 20 && number < 100) {
        const newarr = num.slice('');

        if (newarr[1] === '0') {
            result += toTwoTens(newarr[0]);
        }
        if (newarr[1] !== '0') {
            result += toTwoTens(newarr[0]) + ' ' + toUnit(newarr[1]);
        }
    }
    if (number >= 100 && number < 1000) {
        const newarr = num.slice('');

        if (newarr[1] === '0' && newarr[2] !== '0') {
            result += toHundreds(newarr[0]) + ' ' + toUnit(newarr[2]);
        }
        if (newarr[1] === '0' && newarr[2] === '0') {
            result += toHundreds(newarr[0]);
        }
        if (newarr[1] !== '0' && newarr[2] === '0' && newarr[1] !== '1') {
            result += toHundreds(newarr[0]) + ' ' + toTwoTens(newarr[1]);
        }
        if (newarr[0] !== '0' && newarr[1] !== '0' && newarr[2] !== '0' && newarr[1] !== '1') {
            result += toHundreds(newarr[0]) + ' ' + toTwoTens(newarr[1]) + ' ' + toUnit(newarr[2]);
        }
        if (newarr[1] === '1') {
            result += toHundreds(newarr[0]) + ' ' + toTens(newarr[1] + newarr[2]);
        }
    }

    return result;
};

function toUnit (num) {
    if (num === '1') return 'one';
    if (num === '2') return 'two';
    if (num === '3') return 'three';
    if (num === '4') return 'four';
    if (num === '5') return 'five';
    if (num === '6') return 'six';
    if (num === '7') return 'seven';
    if (num === '8') return 'eight';
    if (num === '9') return 'nine';
    if (num === '9') return 'nine';
};

function toTens (num) {
    if (num === '10') return 'ten';
    if (num === '11') return 'eleven';
    if (num === '12') return 'twelve';
    if (num === '13') return 'thirteen';
    if (num === '14') return 'fourteen';
    if (num === '15') return 'fifteen';
    if (num === '16') return 'sixteen';
    if (num === '17') return 'seventeen';
    if (num === '18') return 'eighteen';
    if (num === '19') return 'nineteen';
};

function toTwoTens (num) {
    if (num === '2') return 'twenty';
    if (num === '3') return 'thirty';
    if (num === '4') return 'forty';
    if (num === '5') return 'fifty';
    if (num === '6') return 'sixty';
    if (num === '7') return 'seventy';
    if (num === '8') return 'eighty';
    if (num === '9') return 'ninety';
};

function toHundreds (num) {
    if (num === '1') return 'one hundred';
    if (num === '2') return 'two hundred';
    if (num === '3') return 'three hundred';
    if (num === '4') return 'four hundred';
    if (num === '5') return 'five hundred';
    if (num === '6') return 'six hundred';
    if (num === '7') return 'seven hundred';
    if (num === '8') return 'eight hundred';
    if (num === '9') return 'nine hundred';
    if (num === '9') return 'nine hundred';
};