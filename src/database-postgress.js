import { sql } from "./db.js"

export class DataBasePostgress {

    async list(search) {
        console.log(search)
        if (search) {
            return await sql`select * from videos where title ilike ${`%` + search + '%'} or description ilike ${`%` + search + '%'}`
        } else {
            return await sql`select * from videos`
        }
    }
    async create(video) {
        const { title, description, duration } = video
        await sql`insert into videos (title,description,duration) values (${title},${description},${duration})`
    }
    async update(id, video) {
        const { title, description, duration } = video
        await sql`update videos set title = ${title} ,description = ${description},   duration = ${duration} where id = ${id}`
    }
    async delete(id) {

        await sql`delete from videos where id = ${id}`
    }

}