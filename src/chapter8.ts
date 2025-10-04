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
  // 第3章 データ処理
  type user = {
    name: string;
    age: number;
    premiumUser: boolean;
  };

  const data: string = `
  uhyo,26,1
  John Smith,17,0
  Mary Sue,14,1
  `;

  // ここにコードを記述する
  const preUsers = data
    .replaceAll(' ', '')
    .split('\n')
    .filter((x) => {
      return !!x;
    });

  const users = preUsers.map((x) => {
    const userData = x.split(',');
    return {
      name: userData.at(0),
      age: userData.at(1),
      premiumUser: Boolean(Number(userData.at(2))),
    };
  });

  for (const user of users) {
    if (user.premiumUser) {
      console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
      console.log(
        `${user.name} (${user.age})はプレミアムユーザーではありません。`
      );
    }
  }
}
