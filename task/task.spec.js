const request = require('supertest')
const app = require('../app')

// describe untuk mengelompokkan beberapa test
describe('Tasks Module', () => {
    describe('POST /tasks', () => {
        it('should return success if using valid data', async () => {
            await request(app)
                .post('/tasks')
                .send({
                    title: 'Learn TDD',
                    isDone: false,
                    date: Date.now()
                })
                .expect('Content-Type', /json/)
                .expect(200)
        })
        it('should return bad request (400) if using invalid data', async () => {
            await request(app)
                .post('/tasks')
                .send({
                })
                .expect('Content-Type', /json/)
                .expect(400)
        })
    })
})