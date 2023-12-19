import express from 'express';
import { router } from './routes.js';
import cors from 'cors';
import { URL } from 'url'; // in Browser, the URL in native accessible on window

const app = express()
const port = 3001

app.use(cors());

const pathToFrontend = new URL('../frontend/build', import.meta.url).pathname;
app.use(express.static(pathToFrontend));
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;