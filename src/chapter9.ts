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
  課題：配列から最頻値（もっとも多く出現する値）を求めよ
  
  ・条件
  入力：数値の配列（例: [1, 2, 2, 3, 3, 3, 4]）
  出力：最頻値（この例なら3）

  ・追加条件
  複数の最頻値がある場合は、そのうちの1つを返せばOK
  配列はハードコーディングしてよい
   */
  const arr = [1, 2, 2, 3, 3, 3, 4, 7, 7, 7, 7];

  const freq: { [key: number]: number } = {};
  let maxCount = 0;
  let mode = null;

  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > maxCount) {
      maxCount = freq[num];
      mode = num;
    }
  }
  console.log(freq);
  console.log(mode);
}
