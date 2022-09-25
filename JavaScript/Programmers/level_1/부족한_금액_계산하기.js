function solution(price, money, count) {
    let needMoney;

    if (count % 2 === 0) {
        needMoney = (price * (1 + count) * count) / 2;
    } else {
        needMoney = price * (1 + count) * (parseInt(count / 2) + 0.5);
    }

    if (money >= needMoney) {
        return 0;
    }

    return needMoney - money;
}
