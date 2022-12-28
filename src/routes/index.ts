import express from 'express';
import path from 'path';
import images from './api/images';

const routes: express.Router = express.Router();

routes.use('/api/images', images);
routes.get('/', (req: express.Request, res: express.Response): void => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

export default routes;
