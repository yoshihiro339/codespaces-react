import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirnameの代替
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src');
const baseFile = path.join(srcDir, 'chapter.ts');

// コマンドライン引数取得
const arg = process.argv[2];

// chapterX.tsファイル一覧取得
const files = fs.readdirSync(srcDir);
const chapterFiles = files
  .map((f) => f.match(/^chapter(\d+)\.ts$/))
  .filter(Boolean)
  .map((m) => Number(m[1]));

// コピー元ファイル決定
let copyFrom = baseFile;
if (arg && /^\d+$/.test(arg)) {
  const num = Number(arg);
  if (chapterFiles.includes(num)) {
    copyFrom = path.join(srcDir, `chapter${num}.ts`);
  }
}

// 新しいchapterX.tsの番号決定
const nextNum = chapterFiles.length > 0 ? Math.max(...chapterFiles) + 1 : 1;
const newFile = path.join(srcDir, `chapter${nextNum}.ts`);

// コピー処理
if (!fs.existsSync(copyFrom)) {
  console.error(`${path.basename(copyFrom)}が見つかりません`);
  process.exit(1);
}
fs.copyFileSync(copyFrom, newFile);
console.log(
  `${path.basename(copyFrom)} を chapter${nextNum}.ts として作成しました`
);
