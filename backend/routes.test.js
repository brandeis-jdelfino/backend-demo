import express from 'express';
import request from 'supertest';
import { router, hello } from './routes.js';

const app = new express();
app.use('/', router);

it('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('Hello world!');
});

it('responds to /hello/:name', async () => {
    const res = await request(app).get('/hello/Mira');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('Hello Mira!');
});
    

it('handles hello', () => {
    const req = {  };
    const res = { text: '',
        send: function(input) { this.text = input } 
    };

    hello(req, res);
    expect(res.text).toEqual('Hello world!');
});

it('handles hello/Mira', () => {
    const req = {  params: { name: 'Mira' } };
    const res = { text: '',
        send: function(input) { this.text = input } 
    };

    hello(req, res);
    expect(res.text).toEqual('Hello Mira!');
});