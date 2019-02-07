const request = require('supertest');

const server = require('./server');
const db = require('../data/dbConfig');

describe('the route handlers', ()=>{
    describe('get/', ()=>{
        it('status code is 200', async ()=>{
            const response = await request(server).get('/');

            expect(response.status).toBe(200);
        })

        it('sends back json', async ()=>{
            const response = await request(server).get('/');

            expect(response.type).toMatch(/json/i);
        })

        it('sends back correct object', async ()=>{
            const response = await request(server).get('/');

            expect(response.body).toEqual({ api: 'up' });
        })
    })

    describe('get/hobbits', ()=>{
        it('status code is 200', async ()=>{
            const response = await request(server).get('/hobbits');

            expect(response.status).toBe(200);
        })

        it('sends back json', async ()=>{
            const response = await request(server).get('/hobbits');

            expect(response.type).toMatch(/json/i);
        })

        it('sends back correct object', async ()=>{
            const response = await request(server).get('/hobbits');

            expect(response.body).toEqual([]);
        })
    })

    describe('post/hobbits', ()=>{
        afterEach(async ()=>{
            // removes and restarts ids
            await db('hobbits').truncate();
        })

        it('status code is 201', async ()=>{
            const body = {name: 'bilbo'}
            const response = await request(server).post('/hobbits').send(body);

            expect(response.status).toBe(201);
        })

        it('sends back correct object', async ()=>{
            const body = {name: 'bilbo'}
            const response = await request(server).post('/hobbits').send(body);

            expect(response.body).toEqual([1]); 
        })
    })
})