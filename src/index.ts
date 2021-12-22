import express from 'express';
import routes from './routes';

const app: express.Application = express();
const PORT = 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

export default app;
