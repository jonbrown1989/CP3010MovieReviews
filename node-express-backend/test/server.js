import { describe, it } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import app from '../src/server.js'; 
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' }); 

describe('/api/movies route', function() {
  it('should return status code 200', async function() {
    const response = await request(app).get('/api/movies');
    expect(response.status).to.equal(200);
  });
});
