"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const port = process.env.PING_LISTEN_PORT || 3000;
const server = http_1.default.createServer((req, res) => {
    const methodeUtilisee = req.method;
    const adresseDemandee = req.url;
    const leGet = (methodeUtilisee === "GET");
    const leBonChemin = (adresseDemandee === "/ping");
    if (leGet && leBonChemin) {
        const lesHeadersDuClient = req.headers;
        const texteJsonAEnvoyer = JSON.stringify(lesHeadersDuClient);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(texteJsonAEnvoyer);
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(port, () => {
    console.log(`Port : ${port}`);
});
