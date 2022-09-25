// 처음 푼 방식
function solution(s) {
    s = s.replace(/zero/gi, '0');
    s = s.replace(/one/gi, '1');
    s = s.replace(/two/gi, '2');
    s = s.replace(/three/gi, '3');
    s = s.replace(/four/gi, '4');
    s = s.replace(/five/gi, '5');
    s = s.replace(/six/gi, '6');
    s = s.replace(/seven/gi, '7');
    s = s.replace(/eight/gi, '8');
    s = s.replace(/nine/gi, '9');

    return Number(s);
}

// 다른 사람 풀이 중 남다른 사고 방식의 풀이
