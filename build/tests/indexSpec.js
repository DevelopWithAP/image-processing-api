"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Contains test for index.ts */
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
describe('Loading express server', () => {
    it('should respond with status 200 OK', (done) => {
        (0, supertest_1.default)(index_1.default)
            .get('/')
            .expect(200)
            .end(error => error ? done.fail(error) : done());
    });
});
