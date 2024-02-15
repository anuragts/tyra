import { createServer } from "http";

export default function server() {
    createServer((request, response) => {
        const contentType = 'text/plain';
        response.writeHead(200, {'Content-Type': contentType});
        response.write("Hello World");
        response.end();
    }).listen(3000);
    
    console.log('Server running at http://127.0.0.1:3000/');
}
