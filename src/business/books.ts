import { query } from '../db/db';
import { Book } from '../models/Book';

export default class Books {
    static async get (id: any): Promise<any> {
        return query('SELECT * FROM books WHERE ID  = $1', [id]);
    }

    static async getAll (): Promise<any> {
        return query('SELECT * FROM books ORDER BY title ASC', []);
    }

    static async delete (id:any): Promise<any> {
        return query('DELETE FROM books WHERE ID = $1', [id]);
    }

    static async insert(book:Book): Promise<any> {
        return query('INSERT INTO books(id, title, author, publisher, date_read) VALUES (DEFAULT, $1, $2, $3, $4)', [book.title, book.author, book.publisher, book.date_read]);
    }
}