# backend-demo
Demo of node.js/express

## Backend script:
1. Create an express app
    ```
    mkdir backend
    cd backend
    npm init
    npm install express
    ```
1. Create `app.js` and add [Hello world example code](https://expressjs.com/en/starter/hello-world.html)
1. Demo the default route: `node app.js`
1. Modify `app.js``, demo the need to reload
1. Install nodemon:
     1. `npm install --save-dev nodemon`
     1. Add command to `package.json`
1. Modify `app.js`, demo auto-reload

## Integration testing script:
1. Install and configure babel:
    1. `npm install -save-dev @babel/preset-env`
    1. Add 
    ```
    module.exports = {presets: ['@babel/preset-env']
    ```
    to `babel.config.js`
1. Install jest and supertest: `npm install --save-dev jest supertest`
1. Add test:
    ```
    import request from 'supertest';
    import app from './app.js';

    it('responds to /', async () => {
        const res = await request(app).get('/');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.text).toEqual('Hello world!');
    });
    ```
1. Run test, note warning - explain how `app` is left running
1. Refactor app.js to pull out routes into `routes.js`
1. Add unit test of handler:
   ```
    it('handles hello', () => {
        const req = {  };
        const res = { text: '',
            send: function(input) { this.text = input } 
        };

        hello(req, res);
        expect(res.text).toEqual('Hello world!');
    });   
   ```
1. Add parameterized path to `routes.js`:
    ```
    function hello(req, res) {
      const name = req.params?.name ?? "world";
      res.send(`Hello ${name}!`);
    }
    //...
    router.get('/hello/:name', hello)
    ```
1. Add tests for path cases
1. Test the server from a browser
