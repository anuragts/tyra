import { createServer } from "http";
import { readFileSync } from "fs";
import { resolve } from "path"  ;

export default function server(filename?: string, port?: number) {
  createServer((request, response) => {
    if(!filename) {
        response.writeHead(200, { "Content-Type": "text/html" });
        const fileContents = readFileSync(resolve(__dirname, 'static/tyra.html'), 'utf-8');
        response.write(fileContents);
        response.end();
        return;
      }
  
    const contentType = "text/plain";
    response.writeHead(200, { "Content-Type": contentType });
    response.write(`Hello World from ${filename}\n`);
    response.end();
  }).listen(port || 3000);

  // console.log(`Server running at http://127.0.0.1:3000/`);
  console.log(`Server running at http://localhost:${port || 3000}/`);
}
