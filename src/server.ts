import http from "http"
import "./config"
import db from "./db";
import { initModels } from "./models";
import { server } from "./app"

initModels(db);

const hostname = process.env.HOST_NAME || '127.0.0.1'
const port = parseInt(process.env.PORT || '3000')
http.createServer(server).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});