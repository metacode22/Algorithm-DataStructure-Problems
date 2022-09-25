// 질문하기에서 DP라는 힌트를 얻고 DP로 품.
// n이 60,000 이하의 자연수이다 보니 DFS로 풀면 깊이가 60,000까지 갈 수 있다. 거기에 reduce까지 했으니 O(N)이 될 것 같다.
// 반면 DP로 풀면 for문 1번 도니까 O(N)
function solution(n) {
    if (n === 1 || n === 2) return n;

    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
    }

    return dp[n];
}

// 처음은 DFS로 풀려고 했는데 시간 초과, 런타임 에러 발생
function solution(n) {
    let result = 0;

    function DFS(n, current) {
        const sum = current.reduce((acc, curr) => acc + curr, 0);

        if (sum === n) {
            result += 1;
            return;
        }

        if (sum > n) return;

        DFS(n, [...current, 1]);
        DFS(n, [...current, 2]);
    }

    DFS(n, new Array());

    return result % 1000000007;
}
