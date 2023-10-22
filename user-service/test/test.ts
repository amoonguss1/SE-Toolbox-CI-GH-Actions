import {expect, describe, test} from 'vitest'
import app from "../src/index"
import request from 'supertest'
const newAdmin = { id: 1, username: 'bao', email: 'bao@gmail.com', password: 'bao', role: 'ADMIN'};

describe('Admin', () => {
    test('Add Admin to database should pass with status code 201', async () => {
       const res = await request(app).post('/users').send(newAdmin);
       expect(res.status).toStrictEqual(201);
       expect(res.body).toStrictEqual(newAdmin);
    })
})