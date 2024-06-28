"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./connect"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongodb = process.env.MONGO_CONNECT;
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
(0, connect_1.default)(mongodb)
    .then(() => console.log("Mongodb connect"))
    .catch(() => console.log("Mongodb error"));
app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello world</h1>");
});
app.listen(port, () => {
    console.log("Port is running on ports 3000");
});
