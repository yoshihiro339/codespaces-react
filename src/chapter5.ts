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
  // 第2章 FizzBuzz問題
  const isMultiple5 = (num: number): boolean => num % 5 === 0;
  const isMultiple3 = (num: number): boolean => num % 3 === 0;
  const arr = [];
  for (let i = 1; i <= 100; i++) {
    if (isMultiple3(i) && isMultiple5(i)) {
      arr.push('FizzBuzz');
    } else if (isMultiple3(i)) {
      arr.push('Fizz');
    } else if (isMultiple5(i)) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  console.log(arr.join(' '));
}
