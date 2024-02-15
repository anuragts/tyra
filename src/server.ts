import { createServer } from "http";

export default function server(file?: string, port?: number) {
  createServer((request, response) => {
    const contentType = "text/plain";
    response.writeHead(200, { "Content-Type": contentType });
    response.write(`Hello World from ${file}\n`);
    response.end();
  }).listen(port || 3000);

  // console.log(`Server running at http://127.0.0.1:3000/`);
  console.log(`Server running at http://localhost:${port || 3000}/`);
}
