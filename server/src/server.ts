import fastify from 'fastify';
import { memoriesRoutes } from './routes/memories';
import cors from '@fastify/cors'
const app = fastify()
app.register(cors,{
    origin: ['http://localhost:3000']
})

app.register(memoriesRoutes)

//HTTP GET METHOD
app.listen({
    port:3333,  
}).then(() => {
    console.log('👌HTTP server running on http://localhost:3333')
})