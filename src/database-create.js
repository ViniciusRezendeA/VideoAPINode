import { sql } from "./db.js";

sql`CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
);
`
    .then(() => {
        console.log("Tabela foi criada");
    })
    .catch(err => {
        console.error("Erro ao criar a tabela", err);
    });
