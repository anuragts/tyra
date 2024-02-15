import { createServer } from "http";
import { readFileSync } from "fs";
import { resolve } from "path";

export default function server(filename?: string, port?: number) {
  createServer((request, response) => {
    let fileContents;
    if (!filename) {
      response.writeHead(200, { "Content-Type": "text/html" });
      fileContents = readFileSync(
        resolve(__dirname, "static/tyra.html"),
        "utf-8"
      );
      response.write(fileContents);
      response.end();
      return;
    }

    try {
      fileContents = readFileSync(resolve(__dirname, filename), "utf-8");
    } catch (e) {
      response.writeHead(404, { "Content-Type": "text/html" });
      fileContents = readFileSync(
        resolve(__dirname, "static/404.html"),
        "utf-8"
      );
      response.write(fileContents);
      console.error(e);
      response.end();
      return;
    }

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(fileContents);
    response.end();
  }).listen(port || 3000);

  // console.log(`Server running at http://127.0.0.1:3000/`);
  console.log(`Server running at http://localhost:${port || 3000}/`);
}
