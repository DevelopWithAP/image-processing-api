"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const processImage_1 = __importDefault(require("../../../utilities/processImage"));
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // query parameters
    const filename = req.query.filename;
    // must be of type number!
    const height = Number(req.query.height);
    const width = Number(req.query.width);
    // absolute path to /images directory
    const imagesDir = path_1.default.resolve('./' + '/images');
    // access filename
    const imgName = `${imagesDir}/${filename}`;
    const imgNameStripped = String(filename === null || filename === void 0 ? void 0 : filename.toString().replace('.jpg', ''));
    const thumbsDir = path_1.default.resolve('./' + 'thumbnails/');
    /** Processed images file will be of the format: original_filename-new_heightXnew_width.jpg
     * for example fjord.jpg with requested height and width 300 and 300 respecitvely
     * will appear as fjord-300X300.jpg in the thumbnails folder
     */
    const processedImg = `${thumbsDir}/${imgNameStripped}-${height}X${width}.jpg`;
    // User must provide filename
    if (!filename) {
        res.send('Missing image filename');
    }
    // check if requested file exists
    if (!fs_1.default.existsSync(imgName)) {
        res.status(404).send('Could not find file');
    }
    // if no dimensions are provided, produce the original image.
    if (!width || !height) {
        res.sendFile(imgName);
    }
    else {
        // check if thumbnails directorty exists; create if not
        if (!fs_1.default.existsSync(thumbsDir)) {
            fs_1.default.mkdirSync(thumbsDir);
        }
        // proceed with resizing
        yield (0, processImage_1.default)(imgName, width, height, processedImg);
        res.sendFile(processedImg);
    }
}));
exports.default = images;
