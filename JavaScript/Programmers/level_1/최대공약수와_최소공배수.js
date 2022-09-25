function solution(n, m) {
    const realN = n;
    const realM = m;
    let GCD;
    let LCM;

    while (n !== 0 && m !== 0) {
        if (n > m) {
            n %= m;
            continue;
        }

        if (m > n) {
            m %= n;
            continue;
        }
    }

    n === 0 ? (GCD = m) : (GCD = n);
    LCM = (realN * realM) / GCD;

    return [GCD, LCM];
}
