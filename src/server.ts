import { createServer } from "http";
import { readFileSync } from "fs";
import { resolve, extname } from "path";
import mimeTypes from "./lib/mimeTypes";

export default function server(filename?: string, port?: number) {
  createServer((request, response) => {
    let fileContents;
    let contentType;

    let ext = filename ? extname(filename).slice(1) : "html";


    contentType = mimeTypes[ext] || "application/octet-stream";

    if (!filename) {
      response.writeHead(200, { "Content-Type": contentType });
      fileContents = readFileSync(
        resolve(__dirname, "static", "tyra.html"),
        "utf-8"
      );
    } else {
      try {
        fileContents = readFileSync(resolve(__dirname, filename), "utf-8");
      } catch (e) {
        response.writeHead(404, { "Content-Type": "text/html" });
        fileContents = readFileSync(
          resolve(__dirname, "static", "404.html"),
          "utf-8"
        );
        console.error(e);
      }
    }

    response.writeHead(200, { "Content-Type": contentType });
    response.write(fileContents);
    response.end();
  }).listen(port || 3000);

  console.log(`Server running at http://localhost:${port || 3000}/`);
}
