const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = Number(process.env.PORT || 3000);
const ROOT = path.resolve(__dirname, "..");

function serveStatic(request, response, url) {
    if (request.method !== "GET" && request.method !== "HEAD") {
        response.writeHead(405);
        return response.end("Método no permitido");
    }

    let pathname;
    try {
        pathname = decodeURIComponent(url.pathname);
    } catch {
        response.writeHead(400);
        return response.end("Ruta no válida");
    }

    const relativePath = pathname === "/" ? ".vscode/index.html" : pathname.replace(/^\/+/, "");
    const filePath = path.resolve(ROOT, relativePath);
    const relativeToRoot = path.relative(ROOT, filePath);
    if (relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot) ||
        relativePath.split(/[\\/]/).some(part => part.startsWith(".") && part !== ".vscode") || path.basename(filePath) === "server.js") {
        response.writeHead(403);
        return response.end("Acceso denegado");
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            response.writeHead(404);
            return response.end("Archivo no encontrado");
        }

        const extension = path.extname(filePath).toLowerCase();
        const contentTypes = {
            ".css": "text/css; charset=utf-8",
            ".html": "text/html; charset=utf-8",
            ".js": "text/javascript; charset=utf-8",
            ".svg": "image/svg+xml",
            ".json": "application/json; charset=utf-8"
        };
        response.writeHead(200, {
            "Content-Type": contentTypes[extension] || "application/octet-stream",
            "Cache-Control": "no-cache"
        });
        response.end(request.method === "HEAD" ? undefined : content);
    });
}

const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    serveStatic(request, response, url);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado en el puerto ${PORT}.`);
});
