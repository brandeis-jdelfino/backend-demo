import { Router } from 'express';

const router = Router();

function hello(req, res) {
    const name = req.params?.name ?? "world";
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(`Hello ${name}!`);
}

router.get('/:name', hello);

export { router, hello };
