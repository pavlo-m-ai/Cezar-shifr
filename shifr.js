const alphabet = 'абвгґдеєжзиійклмнопрстуфхцчшщьюя';
const shift = 5;

function encrypt(text) {
    return text.split('').map(char => {
        const index = alphabet.indexOf(char);
        if (index === -1) return char;
        return alphabet[(index + shift) % alphabet.length];
    }).join('');
}

function decrypt(text) {
    return text.split('').map(char => {
        const index = alphabet.indexOf(char);
        if (index === -1) return char;
        return alphabet[(index - shift + alphabet.length) % alphabet.length];
    }).join('');
}

const originalText = 'привіт';
const encryptedText = encrypt(originalText);
const decryptedText = decrypt(encryptedText);

console.log('Оригінальний текст:', originalText);
console.log('Зашифрований текст:', encryptedText);
console.log('Розшифрований текст:', decryptedText);
