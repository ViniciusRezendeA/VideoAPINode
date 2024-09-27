import { fastify } from "fastify";
import { DataBasePostgress } from "./src/database-postgress.js";
const server = fastify()
const database = new DataBasePostgress()

//Port to request All videos
server.get("/videos", async (request, reply) => {
    const search = request.query.search
    const videos = await database.list(search)

    return reply.send(videos)
})

//Port to register videos
server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body

    await database.create({
        title, description, duration
    })

    return reply.status(201).send()
})

//Port to update videos
server.put('/videos/:id', async (request, reply) => {
    const id = request.params.id;
    const { title, description, duration } = request.body
    const video = { title, description, duration }
    await database.update(id, video);

    return reply.status(204).send()
})

//Port to delete videos
server.delete('/videos/:id', async (request, reply) => {
    const id = request.params.id;
    await database.delete(id);

    return reply.status(204).send()
})

server.listen({
    host: "0.0.0.0",
    port: process.env.PORT ?? 3333
})