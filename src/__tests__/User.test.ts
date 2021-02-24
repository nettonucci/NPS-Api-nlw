import request from 'supertest'
import { app } from '../app'

describe('Users', () => {

    request(app).post('/users')
    .send({
        name: "Name Example",
        email: 'email@example.com'
    })

})