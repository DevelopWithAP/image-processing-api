import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res)=> {
    res.status(200).send('OK');
});

app.listen(port, ()=> {
    console.log(`listening on http://localhost:${port}/`);
});

export default app;