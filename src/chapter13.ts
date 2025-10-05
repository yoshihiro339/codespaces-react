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
  課題：配列内の要素の合計値を求めよ
条件
入力：数値の配列（例: [1, 2, 3, 4, 5]）
出力：合計値（例: 15）
追加条件
配列はハードコーディングしてOK
  */
  const arr = [1, 2, 3, 4, 5];

  const result = arr.reduce((prev, currentVal) => {
    return (prev = prev + currentVal);
  });

  // AIの回答
  // さらにシンプルに書く場合は、初期値を指定して
  // const result = arr.reduce((prev, currentVal) => prev + currentVal, 0);
  // とすることもできます（初期値がない場合、配列が空だとエラーになるため）。

  console.log(result);
}
