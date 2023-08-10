"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = require("./routes/api");
dotenv_1.default.config();
const app = (0, express_1.default)(), port = process.env.PORT;
// Set up other middleware:
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Set up routing:
app.use(api_1.apiRouter);
app.listen(port, () => {
    console.log(`Service listening on port ${port}`);
});
