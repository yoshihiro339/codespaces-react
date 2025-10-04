// 実行コマンド: npm run --silent start:prod
import { createInterface } from 'readline';
export function run() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // &&演算子の場合、左オペランドがfalsyの場合、左オペランドを返す
  // ||演算子の場合、左オペランドがfalsyの場合、右オペランドを返す

  rl.question('何か入力してください: ', (name) => {
    const displayName = name || 'デフォルト';
    console.log(`${displayName}`);
    rl.close();
  });
}
