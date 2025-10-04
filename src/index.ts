import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chaptersDir = __dirname;
const files = fs.readdirSync(chaptersDir);
const chapterFiles = files
  .filter((f) => /^chapter\d+\.js$/.test(f)) // .ts → .js に変更
  .map((f) => ({
    file: f,
    num: Number(f.match(/^chapter(\d+)\.js$/)?.[1]), // .ts → .js に変更
  }))
  .filter((f) => !isNaN(f.num));

if (chapterFiles.length === 0) {
  console.log('chapterファイルが見つかりません');
  process.exit(1);
}

const latest = chapterFiles.reduce((a, b) => (a.num > b.num ? a : b));
const latestPath = path.join(chaptersDir, latest.file);
const latestUrl = pathToFileURL(latestPath).href;

(async () => {
  const mod = await import(latestUrl);
  if (typeof mod.run === 'function') {
    mod.run();
  } else {
    console.log(`${latest.file} に run 関数がありません`);
  }
})();
