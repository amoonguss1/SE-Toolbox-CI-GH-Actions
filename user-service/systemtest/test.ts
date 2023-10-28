import {expect, beforeAll, describe, test} from 'vitest'
import app from "../src/index"
import request from 'supertest'
import { sequelize } from '../src/db/dbConfig'; // Import the database connection

const newAdmin = { id: 1, username: 'bao', email: 'bao@gmail.com', password: 'bao', role: 'ADMIN'};


describe('Admin', () => {
    
    beforeAll(async () => {
        // Connect to the database after it's ready
        await sequelize.sync({force: true});
    });
    
    test('Add Admin to database should pass with status code 201', async () => {
        const res = await request(app).post('/users').send(newAdmin);
        
        expect(res.status).toStrictEqual(201);
        expect(res.body).toStrictEqual(newAdmin);
    })
})