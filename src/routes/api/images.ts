import express from 'express';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import processImage from '../../../utilities/processImage';

const images: express.Router = express.Router();

images.get('/', async (req: express.Request, res: express.Response):Promise<void>=> {
    // query parameters
    const filename = req.query.filename;
    // must be of type number!
    const height = Number(req.query.height); 
    const width = Number(req.query.width);

    // absolute path to /images directory
    const imgDir = path.resolve('./'+'/images');

    // access filename
    const imgName = `${imgDir}/${filename}`;
    const imgNameStripped = String(filename?.toString().replace('.jpg', ''));

    const thumbsDir = path.resolve('./'+ 'thumbnails/');

    /** Processed images file will be of the format: original_filename-new_heightXnew_width.jpg
     * for example fjord.jpg with requested height and width 300 and 300 respecitvely
     * will appear as fjord-300X300.jpg in the thumbnails folder
    */ 
    const processedImg = `${thumbsDir}/${imgNameStripped}-${height}X${width}.jpg`;

    // check if thumbnails directorty exists; create if not
    if(!fs.existsSync(thumbsDir)) {
        fs.mkdirSync(thumbsDir);
    }
    // User must provide filename
    if (!filename) {
        res.send('Missing image filename');
    }
    // check if requested file exists
    if (!fs.existsSync(imgName)) {
        res.status(404).send('Could not find file');
    } 
    // if no dimensions are provided, produce the original image.
    if (!width || !height) {
        res.sendFile(imgName);
    }
    else {
        // proceed with resizing
        await processImage(imgName, width, height, processedImg);
        res.sendFile(processedImg);
    }

});

export default images;