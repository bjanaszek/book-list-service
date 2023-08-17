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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db/db");
class Books {
    static get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.query)('SELECT * FROM books WHERE ID  = $1', [id]);
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.query)('SELECT * FROM books ORDER BY title ASC', []);
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.query)('DELETE FROM books WHERE ID = $1', [id]);
        });
    }
    static insert(book) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.query)('INSERT INTO books(id, title, author, publisher, date_read) VALUES (DEFAULT, $1, $2, $3, $4)', [book.title, book.author, book.publisher, book.date_read]);
        });
    }
}
exports.default = Books;
