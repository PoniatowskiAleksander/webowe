import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
    res.sendFile()
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})