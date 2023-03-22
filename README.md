# はじめに
課題をもらったので、そのコードを作成する。

- node.js + Typescriptで作成する。
- テストコードも作成する
- 作業時間も計測する（17:42~19:54[2h12m]）


# 課題

``` 
n個の品物があり、i番目の品物のそれぞれ重さと価値が weight[i],value[i]となっている (i=0,1,...,n−1)。
これらの品物から重さの総和がWを超えないように選んだときの、価値の総和の最大値を求めよ。
※実装言語はお任せします。
※テストコードも実装してください。
※開発にかかった所要時間も提出してください。

[制約]
・1 < n <= 100
・weight[i],value[i]は整数
・1 <= weight[i],value[i] <= 1000
・1 <= W <= 10000
```

## テスト実行

```bash
npm test
```
## MEMO

- 問題の意図がわからなかったので調べながら問題を解く
- 調査して、ナップザック問題と呼ばれる動的計画法のアルゴリズム問題と知る
- ネットで答えは見ないようにして、問題の意図の部分だけ読み解く
- 品物ごとに重さと価値があり、それをナップザックに入れた場合の最大価値を計算する問題  
入力値として、品物ごとに重さと価値が設定されたものを複数個渡し、持てる重さとして許容容量も渡すして、価値の総和の最大値を求める。
入力値として以下の制約がある。
    - 品物の種類数 n : 1 < n <= 100
    - 持てる重さ W : 1 <= W <= 10000
    - 品物の重さ wi : 1 <= wi <= 1000
    - 品物の価値 vi : 1 <= vi <= 1000
