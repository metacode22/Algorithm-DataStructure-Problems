function solution(new_id) {
    let result = new_id.toLowerCase();

    for (let str of result) {
        if (/[a-z]/.test(str) === false && isNaN(str) === true && str !== '-' && str !== '_' && str !== '.') {
            result = result.replace(str, '');
        }
    }

    result = result.split('');

    for (let i = 0; i < result.length; i++) {
        if (result[i] === '.' && result[i + 1] === '.') {
            result.splice(i, 1, '!');
        }
    }

    result = result.filter(element => element !== '!');

    if (result[result.length - 1] === '.') {
        result.splice(result.length - 1, 1, '');
    }

    result = result.join('');

    if (result[0] === '.') {
        result = result.replace('.', '');
    }

    if (result[result.length - 1] === '.') {
        result = result.slice(0, result.length - 1);
    }

    if (result.length === 0) {
        result = 'a';
    }

    if (result.length >= 16) {
        result = result.slice(0, 15);
    }

    if (result[result.length - 1] === '.') {
        result = result.slice(0, result.length - 1);
    }

    while (result.length < 3) {
        result += result[result.length - 1];
    }

    return result;
}
