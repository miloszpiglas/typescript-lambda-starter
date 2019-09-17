import * as archiver from 'archiver';
import * as fs from 'fs';
import {resolve} from 'path';

const main = () => {
    const archive = archiver('zip');
    const output = fs.createWriteStream(__dirname + '/../function.zip');
    output.on('close', () => {
        console.log(`Written ${archive.pointer()} total bytes`);
    });

    archive.pipe(output);
    archive.directory(resolve(__dirname + '/../build'), false);
    archive.directory(resolve(__dirname + '/../app/node_modules'), 'node_modules');
    archive.finalize();
};
main();
