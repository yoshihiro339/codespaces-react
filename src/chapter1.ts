// 実行コマンド: npm run --silent start:prod
import { createInterface } from 'readline';
export function run() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
  });
}
