import app from '../index';
import supertest from 'supertest';


describe('Testing API endpoint', ()=> {

    it('Should return 404 Not Found ', (done)=> {
        supertest(app).get('/images')
        .expect(404)
        .end(error => error ? done.fail(error): done());
    });

    it('Should produce original image', (done)=> {
        supertest(app).get('/api/images?filename=encenadaport.jpg')
        .expect(200)
        .end(error => error ? done.fail(error): done());
    });

    it('Should produce processed image', (done)=> {
        supertest(app).get('/api/images?filename=encenadaport.jpg&width=400&height=400')
        .expect(200)
        .end(error => error ? done.fail(error): done());
    })

});
