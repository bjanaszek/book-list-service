import { Pool } from 'pg';

const connData = {
    host: 'postgres',
    user: 'postgres',
    database: 'books',
    password: 'password',
    port: parseInt(process.env.DB_PORT || "5432")
};

console.log(`Postgres connection data: ${JSON.stringify(connData)}`);

const pool = new Pool(connData);

pool.on('error', (err, client) => {
    console.error('Unexpected error on pg client.', err);
    process.exit(-1);
});

export const query = async (text: any, params: any) => {
    const client = await pool.connect();
    const res = await pool.query(text, params);
    client.release();

    return res;
}