import * as fs from 'fs'
import {Readable} from 'stream'


const file = fs.createWriteStream("example-" + Date.now()+'.txt')


async function * generate() {
    for (let i = 0; i < 20; i++) {
        yield (Math.round(Math.random() * (2137+420)) - 420)
    }
}

const readable = Readable.from(generate());

readable.on('data', async (chunk) => {
    //console.log(chunk);
    const text = chunk.toString();
    file.write(text + '\n');
})
