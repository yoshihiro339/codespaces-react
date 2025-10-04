import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirnameの代替
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src');
const baseFile = path.join(srcDir, 'chapter.ts');

// 1. srcディレクトリ内のchapter*.tsを取得
const files = fs.readdirSync(srcDir);
const chapterFiles = files
  .map((f) => f.match(/^chapter(\d+)\.ts$/))
  .filter(Boolean)
  .map((m) => Number(m[1]));

// 2. 最新番号を取得
const nextNum = chapterFiles.length > 0 ? Math.max(...chapterFiles) + 1 : 1;
const newFile = path.join(srcDir, `chapter${nextNum}.ts`);

// 3. chapter.tsをコピー
if (!fs.existsSync(baseFile)) {
  console.error('chapter.tsが見つかりません');
  process.exit(1);
}
fs.copyFileSync(baseFile, newFile);
console.log(`chapter${nextNum}.ts を作成しました`);
