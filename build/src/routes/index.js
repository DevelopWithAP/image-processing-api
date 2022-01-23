"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./api/images"));
const routes = express_1.default.Router();
routes.use('/api/images', images_1.default);
routes.get('/', (req, res) => {
    res.send(`<h3>Main API route</h3>
     <hr> 
    <p> Convert your image by specifying filename-with exptension, width and height as a URL parameters</p>
    <p> Example: locahost:3000/api/images?filename=my_filename.jpg&width=my_width&height=my_height </p>
     `);
});
exports.default = routes;
