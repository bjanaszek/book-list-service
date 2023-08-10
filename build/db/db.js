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
exports.query = void 0;
const pg_1 = require("pg");
const connData = {
    host: 'postgres',
    user: 'postgres',
    database: 'books',
    password: 'password',
    port: parseInt(process.env.DB_PORT || "5432")
};
console.log(`Postgres connection data: ${JSON.stringify(connData)}`);
const pool = new pg_1.Pool(connData);
pool.on('error', (err, client) => {
    console.error('Unexpected error on pg client.', err);
    process.exit(-1);
});
const query = (text, params) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    const res = yield pool.query(text, params);
    client.release();
    return res;
});
exports.query = query;
