import { Router } from 'express';

const router = Router();

function hello(req, res) {
    const name = req.params?.name ?? "world";
    res.send(`Hello ${name}!`);
}

router.get('/', hello);
router.get('/hello/:name', hello)

export { router, hello };
