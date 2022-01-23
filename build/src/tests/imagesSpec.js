"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const processImage_1 = __importDefault(require("../../utilities/processImage"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
describe('Testing API endpoint', () => {
    it('Should return 404 Not Found ', (done) => {
        (0, supertest_1.default)(index_1.default)
            .get('/images')
            .expect(404)
            .end((error) => (error ? done.fail(error) : done()));
    });
    it('Should produce original image', (done) => {
        (0, supertest_1.default)(index_1.default)
            .get('/api/images?filename=encenadaport.jpg')
            .expect(200)
            .end((error) => (error ? done.fail(error) : done()));
    });
    it('Should produce processed image', (done) => {
        (0, supertest_1.default)(index_1.default)
            .get('/api/images?filename=encenadaport.jpg&width=400&height=400')
            .expect(200)
            .end((error) => (error ? done.fail(error) : done()));
    });
});
describe('Testing the image processing function', () => {
    it('should produce a resized image', (done) => {
        const filename = 'encenadaport.jpg';
        const width = 400;
        const height = 400;
        const testPath = `${path_1.default.resolve('./' + '/thumbnails')}/${filename.replace('.jpg', '')}-${height}X${width}.jpg`;
        (0, processImage_1.default)(filename, width, height, testPath);
        expect(fs_1.default.existsSync(testPath)).toBe(true);
        done();
    });
});
