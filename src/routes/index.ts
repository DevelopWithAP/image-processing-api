import express from 'express';
import images from './api/images';


const routes: express.Router = express.Router();

routes.use('/api/images', images);
routes.get('/', (req: express.Request, res: express.Response): void=> {
    res.send(`<h3>Main API route</h3>
     <hr> 
    <p> Convert your image by specifying filename-with exptension, width and height as a URL</p>
    <p> Example: locahost:3000/api/images?filename=my_filename.jpg&width=my_width&height=my_height </p>
     `);
});

export default routes;
