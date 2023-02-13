const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const BINARY_TABLE = {
    '00': '',
    '10': '.',
    '11': '-'
}

function decode(expr) {
    let result = '';
    let strArray = [];

    for(let i = 0; i < expr.length; i += 10) {
        let temp = expr.slice(i, i + 10);
        let tempStr = '';

        if (temp == '**********') {strArray.push(' '); continue;}
        
        for(let j = 0; j < temp.length; j += 2) {
            let item = temp[j] + temp[j + 1];
            tempStr += BINARY_TABLE[item]
        }

        strArray.push(tempStr)
    }

    for(let elem of strArray) {
        if(elem != ' ') result += MORSE_TABLE[elem];
        else result += ' ';
    }
    
    return result;
}

module.exports = {
    decode
}