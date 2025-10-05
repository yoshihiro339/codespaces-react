// ファイルコピーコマンド: node scripts/copy-chapter.js n
// nはコピー元になるファイルの数字を入力してください。
// 特に指定がない場合はデフォルトファイルをコピーします。

// 実行コマンド: npm run --silent start:prod

/*
  コミット時に書いておいた方がよいこと

  何を変更したか（機能追加・修正・削除など）
  なぜ変更したか（理由や背景が必要な場合）
  影響範囲や注意点（大きな変更や互換性に関わる場合）
  よく使われる短縮単語・Prefix例

    feat: 新機能追加（feature）
    fix: バグ修正（fix）
    docs: ドキュメントのみの変更（documentation）
    refactor: リファクタリング（機能変更なしの整理）
    style: コードの見た目のみの変更（フォーマット、スペース等）
    test: テスト追加・修正
    chore: ビルドやツールなどの雑多な変更
 */
export function run() {
  /*
  課題：配列内の連続する同じ値の最大個数を求めよ
条件
入力：数値の配列（例: [1, 1, 2, 2, 2, 3, 1, 1, 1, 1]）
出力：連続して並んでいる同じ値の最大個数（例: 4）
追加条件
配列はハードコーディングしてOK
  */
  const arr = [1, 1, 2, 2, 2, 3, 1, 1, 1, 1];

  // let count: number = 0;
  //
  // const result = arr.reduce((p, c, i) => {
  //   if (c === arr[i - 1]) {
  //     count++;
  //   } else {
  //     if (p < count) {
  //       p = count;
  //     }
  //   }
  //   return p;
  // });

  // console.log(result);

  let maxCount = 1;
  let currentCount = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 1;
    }
  }
  console.log(maxCount);
}
