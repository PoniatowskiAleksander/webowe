//import http, { Server } from 
import { readFile } from "fs/promises"
import { writeFile } from "fs/promises"
import http from "http"

const host = '127.0.0.1'
const port = 3000
console.log("World Hello")

const srv = http.createServer(async (req,res)=>{

    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.statusCode = 200;

        const html = await readFile('./form.html');
        res.setHeader('content-type','text/html');
        res.write(html);
        res.end();
    } else if (url === '/kontakt' && method === 'POST'){
        
        const body = [];

        req.on('data',  (chunk) => {
            console.log(chunk.toString());
            body.push(chunk);
        })

        req.on('end', async () => {
            console.log(body);
            const parsedBody = Buffer.concat(body).toString();
            console.log('typ' + typeof(parsedBody));
            console.log('pb' + parsedBody);
            const kontakt = parsedBody.split('=')[1].toString();
            //kontakt = kontakt.toString();
            //kontakt = kontakt.split('&')[0];
            //console.log('typ' + typeof(kontakt))
            await writeFile(`kontakt/message-${Date.now().toString()}.txt`, kontakt);
            res.statusCode = 302;
            res.setHeader('Location', '/dziekujemy');

            return res.end()
        })

    } 
    else if (url === '/dziekujemy') {
        res.statusCode = 200;
        const html = await readFile('./dziekujemy.html');
        res.setHeader('content-type', 'text/html');
        res.write(html);

        res.end();
    }
    else if (url === '/api')  {
        res.statusCode = 200;
        const API = [
            {
                'id': 1,
                'name': 'Jan',
                'surname': 'Kowalski'
            },
            {
                'id': 2,
                'name': 'Janina',
                'surname': 'Kowalska'
            },
            {
                'id': 3,
                'name': 'obj3'
            },
            {
                'id': 4,
                'name': 'obj4'
            },
        ];

        res.setHeader('content-type', 'application/json');
        res.write(JSON.stringify(API));
        res.end();



        
    } else {
        res.statusCode = 404;
        res.write('JSON');
        res.end();
    }
})

srv.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`)
})