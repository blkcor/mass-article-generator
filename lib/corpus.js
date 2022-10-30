import moment from 'moment';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
export function loadCorpus(src) {
    const path = resolve(__dirname, src);
    const data = readFileSync(path, { encoding: 'utf-8' });
    return JSON.parse(data);
}

export function saveCorpus(title, article) {
    const time = moment().format('x');
    const outPutPath = resolve(__dirname, '..', 'output', `${title}${time}.txt`);
    //check if output folder exists
    if (!existsSync(outPutPath)) {
        mkdirSync(outPutPath);
    }
    const text = `${title}\n\n    ${article.join('\n    ')}`;
    //write to file
    writeFileSync(outPutPath, text, { encoding: 'utf-8' });
    return outPutPath
}