
export function dp(capacity: number, weights: number[], values: number[], itemCount: number): number {
    const dp: number[][] = []; // 一時格納先
    // dp[i][j]: i番目までのアイテムで重さがj以下のときの最大価値
    for (let i = 0; i <= itemCount; i++) {
        dp[i] = [];
        for (let j = 0; j <= capacity; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0; // 持ってないときの価値
            } else if (weights[i - 1] <= j) {
                // 対象の重さが入れれる場合： 入れる時
                dp[i][j] = Math.max(
                    values[i - 1] + dp[i - 1][j - weights[i - 1]], dp[i - 1][j]
                );
            } else {
                // 入れない時
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[itemCount][capacity];
}

const main = () => {
    console.log('It main works!');

    // sample 
    const weights = [2, 3, 9, 1];
    const values = [5, 4, 15, 5];
    const capacity = 10;
    const itemCount = weights.length;
    const result:number = dp(capacity, weights, values, itemCount);
    console.log(result)

};


main();
