"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("../business/books"));
const HTTP_STATUS_OK = 200;
exports.apiRouter = express_1.default.Router();
exports.apiRouter.post('/v1/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Handling POST to /v1/books: ${req.body}`);
    const { author, title, publisher, dateRead } = req.body;
    const result = yield books_1.default.insert({ author, title, publisher, dateRead });
    res.status(HTTP_STATUS_OK).send(result);
}));
exports.apiRouter.get('/v1/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Handling GET to /v1/books');
    const result = yield books_1.default.getAll();
    res.status(HTTP_STATUS_OK).send(result);
}));
exports.apiRouter.delete('/v1/books/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(`Handling DELETE to /v1/books/:${id}`);
    const result = yield books_1.default.delete(id);
    res.status(HTTP_STATUS_OK).send(result);
}));
