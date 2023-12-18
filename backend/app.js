import express from 'express';
import { router } from './routes.js';

const app = express()
const port = 3001

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;