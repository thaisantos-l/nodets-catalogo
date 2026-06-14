import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import { fileURLToPath } from 'url';
import mainRoutes from './routes/index.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.set( 'view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());


server.use(express.static(path.join(__dirname, '../public')));

// Rotas

server.use(mainRoutes);

server.use((req, res) =>{
    res.render('pages/404');
})


const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
