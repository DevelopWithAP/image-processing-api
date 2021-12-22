import app from '../index';
import supertest from 'supertest';
import processImage from '../../utilities/processImage';
import path from 'path';
import fs from 'fs';

describe('Testing API endpoint', () => {
  it('Should return 404 Not Found ', (done) => {
    supertest(app)
      .get('/images')
      .expect(404)
      .end((error) => (error ? done.fail(error) : done()));
  });

  it('Should produce original image', (done) => {
    supertest(app)
      .get('/api/images?filename=encenadaport.jpg')
      .expect(200)
      .end((error) => (error ? done.fail(error) : done()));
  });

  it('Should produce processed image', (done) => {
    supertest(app)
      .get('/api/images?filename=encenadaport.jpg&width=400&height=400')
      .expect(200)
      .end((error) => (error ? done.fail(error) : done()));
  });
});

describe('Testing the image processing function', ()=> {
  it('should produce a resized image', (done)=> {
    const filename = 'encenadaport.jpg';
    const width = 400;
    const height = 400;
    const testPath = `${path.resolve('./' + '/thumbnails')}/${filename.replace('.jpg', '')}-${height}X${width}.jpg`;
    
    const response = processImage(filename, width, height, testPath);
    expect(fs.existsSync(testPath)).toBe(true);
    done();
  });
})
